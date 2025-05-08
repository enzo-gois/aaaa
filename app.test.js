const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app");

beforeAll(async () => {
  await mongoose.createConnection(
    "mongodb+srv://root:jWLC50jqT99NXzQ8@cluster0.fxallcd.mongodb.net/test-db?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("API Integration Tests", () => {
  let studentId;

  test("Should create a new student", async () => {
    const response = await request(app)
      .post("/api/students")
      .send({
        name: "João Silva",
        address: "Rua A, 123",
        birthDate: "1990-01-01",
        registration: "2021001",
        phone: "99999-0000",
        email: "joao@email.com",
        course: ["Sistemas", "Matemática"],
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("response._id");

    studentId = response.body.response._id;
  });

  test("Should return all students", async () => {
    const response = await request(app).get("/api/students/all");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("Should create a new discipline", async () => {
    const response = await request(app).post("/api/discipline").send({
      name: "Estrutura de Dados",
      workload: "60h",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("response._id");
  });

  test("Should return a total of zero modified rows", async () => {
    const response = await request(app)
      .put("/api/discipline/edit/681cb55771074f9b3b4423a1")
      .send({
        name: "Algoritmos",
        workload: "60h",
      });

    expect(response.status).toBe(200);
    expect(response.body.matchedCount).toBe(0);
  });

  test("Should return all disciplines", async () => {
    const response = await request(app).get("/api/discipline/all");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

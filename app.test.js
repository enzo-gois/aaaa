// app.test.js
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("./app"); // Certifique-se de exportar o app no app.js

const { Student } = require("./models/Student");
const { Discipline } = require("./models/Discipline");

beforeAll(async () => {
  // Usar uma base de teste (você pode configurar um banco isolado ou em memória como o MongoMemoryServer)
  await mongoose.connect("mongodb+srv://root:jWLC50jqT99NXzQ8@cluster0.fxallcd.mongodb.net/test-db?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Testes de Integração da API", () => {
  let studentId;

  test("Deve criar um novo aluno", async () => {
    const response = await request(app).post("/api/students").send({
      name: "João Silva",
      address: "Rua A, 123",
      birthDate: "1990-01-01",
      registration: "2021001",
      phone: "99999-0000",
      email: "joao@email.com",
      course: ["Sistemas", "Matemática"]
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("response._id");

    studentId = response.body.response._id;
  });

  test("Deve retornar todos os alunos", async () => {
    const response = await request(app).get("/api/students/all");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("Deve criar uma nova disciplina", async () => {
    const response = await request(app).post("/api/discipline").send({
      name: "Estrutura de Dados",
      workload: "60h"
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("response._id");
  });
});

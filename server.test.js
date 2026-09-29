const request = require("supertest");
const app = require("./server");

describe("GET /api/tasks", () => {
  it("répond avec un tableau de tâches", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

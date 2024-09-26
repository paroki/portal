import { expect, it } from "@jest/globals";
import request from "supertest";

it("should fetch beritas", async () => {
  await request(strapi.server.httpServer)
    .get("/api/beritas")
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toContain("pagination"); // expect the response text
    });
});

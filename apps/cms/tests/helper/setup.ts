import { afterAll, beforeAll } from "vitest";
import { bootstrap } from "./bootstrap";

async function cleanupStrapi() {}

beforeAll(async () => {
  await bootstrap();
});

afterAll(async () => {
  await cleanupStrapi();
});

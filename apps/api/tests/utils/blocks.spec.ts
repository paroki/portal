import { describe, expect, it } from "vitest";
import { createArticle, uploadFile } from "../helper/tools";

const body = `
# Header 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada pellentesque nibh in cursus. Sed gravida sed velit vitae consectetur. Donec aliquam bibendum risus quis rhoncus. Praesent congue dolor ac nunc iaculis facilisis. In bibendum nibh vitae magna venenatis iaculis vel accumsan turpis. Nam sit amet mi sed ipsum tincidunt dapibus. Aliquam luctus, diam non semper vulputate, elit orci ultrices ante, ac molestie erat dui id nulla. Sed in dolor sed leo pretium consequat in a lorem. Curabitur tempus ut tellus non feugiat.

Sed condimentum facilisis velit, varius suscipit tellus malesuada sit amet. Fusce porta non diam ut auctor. Vivamus faucibus mauris magna, vitae facilisis dolor mattis ut. Nullam at dui efficitur, bibendum mauris non, egestas arcu. Aenean tempor ante faucibus neque gravida, quis blandit augue porta. Donec accumsan, massa et blandit sagittis, mi urna dapibus velit, in congue erat lectus sed augue. Suspendisse vestibulum est quis magna maximus condimentum. Pellentesque dapibus lectus tortor, quis semper nulla auctor sit amet. Nullam eros libero, eleifend eget efficitur ac, pharetra a odio. Sed id vulputate nisi. Etiam vulputate urna tellus, et mollis lorem dictum et. Donec eget ex eu ipsum pretium pharetra. Mauris eros odio, dignissim nec efficitur vitae, commodo eget erat. Etiam ipsum risus, tincidunt non tincidunt vel, volutpat nec risus.
`;

describe("blocks", () => {
  it("should generate slug and metaTitle", async () => {
    const item = await createArticle({
      title: "Test slug and metaTitle",
    });

    // slug and metaTitle expectation
    expect(item.slug).toBe("test-slug-and-meta-title");
    expect(item.metaTitle).not.toBeNull();
    expect(item.metaTitle).toBe(item.title);
  });

  it("should generate description and metaDescription", async () => {
    const item = await createArticle({
      title: "Test description and metaDescription",
      blocks: [
        {
          __component: "block.rich-text",
          body,
        },
      ],
    });
    // description expectation
    expect(item.description).not.toBeNull();
    expect(item.description).toContain("consectetur adipiscing elit");
    expect(item.metaDescription).toBe(item.description);
  });

  it("shoud generate metaShareImageUrl from image block", async () => {
    const image = await uploadFile("coffee-art.jpg");
    const item = await createArticle({
      title: "Test metaShareImageUrl from image block",
      blocks: [
        {
          __component: "block.image",
          image,
        },
      ],
    });

    Object.assign(item, {});

    // metaShareImageUrl expectation
    expect(item.metaShareImageUrl).not.toBeNull();
    expect(item.metaShareImageUrl).toBe(image.formats.thumbnail.url);
  });

  it("shoud generate metaShareImageUrl from slider block", async () => {
    const image = await uploadFile("coffee-art.jpg");
    const item = await createArticle({
      title: "Test metaShareImageUrl from slider block",
      blocks: [
        {
          __component: "block.slider",
          images: [image],
        },
      ],
    });

    Object.assign(item, {});

    // metaShareImageUrl expectation
    expect(item.metaShareImageUrl).not.toBeNull();
    expect(item.metaShareImageUrl).toBe(image.formats.thumbnail.url);
  });
});

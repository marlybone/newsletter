
import { createClient } from "@sanity/client";

const config = {
  projectId: "ytgp9isj",
  dataset: "production",
  apiVersion: "2024-02-03",
  useCdn: true,
  perspective: 'published'
};

const client = createClient(config);

export default client;
import path from "path";

export default ({ env }) => {
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(__dirname, "..", "..", "..", ".tmp/data.test.db"),
      },
      useNullAsDefault: true,
      debug: false,
    },
  };
};

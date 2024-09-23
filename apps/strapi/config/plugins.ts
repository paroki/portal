export default ({ env }) => ({
  upload: function () {
    // only enable cloudinary on production
    let config = {};
    if ("production" === env("NODE_ENV")) {
      config = {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_API_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      };
    }
    return config;
  },
});

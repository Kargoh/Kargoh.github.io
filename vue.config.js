module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/kargoh.github.io/" : "/",
    env: {
      'vue/setup-compiler-macros': true
    }
  };
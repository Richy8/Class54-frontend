<template>
  <div class="build-layout error-build">
    <div class="container px-4 px-sm-3 mx-auto h-100">
      <div class="row build-row">
        <div class="col-12 col-md-5">
          <!-- ERROR CONTAINER -->
          <div class="error-container">
            <!-- ERROR IMAGE BLOCK -->
            <div class="error-logo-block w-100 mgb-15">
              <img v-lazy="staticImg('Tree.svg')" alt="" />
            </div>

            <!-- ERROR ENTRY -->
            <router-view />

            <!-- HOME BUTTON -->
            <div
              class="button-row d-flex justify-content-center align-items-start flex-nowrap"
            >
              <router-link to="/" class="btn btn-md btn-primary"
                >Back to Home</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorBuild",
};
</script>

<style>
</style>
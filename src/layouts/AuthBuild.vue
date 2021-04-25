<template>
  <div class="build-layout auth-build position-relative">
    <div class="container px-4 px-sm-3 mx-auto">
      <div class="row build-row">
        <div class="col-12 col-md-5">
          <!-- AUTH CONTAINER -->
          <div class="auth-container">
            <!-- AUTH IMAGE BLOCK -->
            <div class="auth-logo-block w-100 mgb-50">
              <img v-lazy="staticImg('Class54Logo.svg')" alt="class54Logo" />
            </div>

            <!-- FORM ENTRY -->
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthBuild",
};
</script>

<style>
</style>
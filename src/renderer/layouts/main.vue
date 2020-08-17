<template>
  <div class="columns is-mobile">
    <div class="column is-4 no-padding-right">
      
    </div>
    <div class="column is-8 no-padding-left">
      <div class="card" id="mainCard">
        <header class="card-header">
          <p class="card-header-title">
            {{ $route.meta.title }}
          </p>
        </header>
        <div class="card-content app-contain">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  mounted () {
    if (process.env.NODE_ENV === 'development') {
      window.$layout = this
    }
  }
}
</script>

<style lang="scss">
  .columns {
    max-height: 550px;
  }
  .app-contain {
    max-height: 91vh;
    overflow-y: auto;
  }
  .no-padding {
    &-right {
      padding-right: 0 !important;
      padding-bottom: 0 !important;
    }
    &-left {
      padding-left: 0 !important;
      padding-bottom: 0 !important;
    }
  }
</style>
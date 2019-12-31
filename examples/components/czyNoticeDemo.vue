<template>
  <div>
    <czy-notice :options.sync="options"
                :show.sync="showNotification"></czy-notice>
    <czy-button @click="openNotice()">Default</czy-button>
  </div>
</template>

<script>
  export default {
    name: "czyNoticeDemo",
    data() {
      return {
        showNotification: false,
        options: {
          autoClose: true,
          backgroundColor: '#769FCD',
          barColor: '#415f77',
          countdownBar: true,
          content: 'The content of the notification.',
          showTime: 5000,
          textColor: '#fff'
        }
      }
    },
    methods: {
      openNotice() {
        this.showNotification = true;
      }
    }
  }
</script>

<style scoped>

</style>

<script setup>

const date = new Date()
const openLink = () => {
  window.open('https://tirebasics.com/')
};  
</script>


<template>
  <div class="border-top mt-auto w-100">
    <div class="p-3 w-100 d-flex flex-column gap-3">
      <p class="mb-0">
        By using our website, you understand and agree that all information provided is "as is" and "as available". This means that we do not represent, warrant or guarantee either expressed or implied as to the accuracy of the product and fitment information provided on this site.
        Use of this site implies your agreement to these terms.
      </p>

      <div class="w-100 d-flex flex-column flex-md-row gap-3 justify-content-between">
        <div class="d-flex gap-1">
          <p class="mb-0 anchor" @click="openLink">
            Tirebasics.com
          </p>
          <p class="mb-0">
             © {{date.getFullYear()}}.   All rights reserved.
          </p>
        </div>

        <div class="d-flex flex-column flex-md-row gap-3">
          <p class="mb-0">
            Terms & Conditions 
          </p>
          <p class="mb-0">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 10px;
  font-weight: 500;
  line-height: 13.64px;
}
.anchor {
  cursor: pointer;
}
</style>
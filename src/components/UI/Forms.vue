<template>
  <div class="forms">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Forms'
}
</script>

<style>
  .forms {
    display: flex;
    width: 95%;
    flex-direction: column;
    color: var(--secondary-text-color);
  }

  .forms input {
    border: none;
    outline: none;
    height: 45px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: white;
    border-bottom: 2px solid var(--border-color);
  }

  .forms input:focus {
    border-bottom: 2px solid var(--primary-color);
  }
</style>
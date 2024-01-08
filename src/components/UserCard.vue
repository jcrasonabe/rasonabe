<template>
  <div class="user-card">
    <div class="card-details">
      <div class="card-row">
        <span class="label">Id:</span>
        <span>{{ user.id }}</span>
      </div>
      <div class="card-row">
        <span class="label">First Name:</span>
        <span>{{ user.firstName }}</span>
      </div>
      <div class="card-row">
        <span class="label">Last Name:</span>
        <span>{{ user.lastName }}</span>
      </div>
      <div class="card-row">
        <span class="label">Maiden Name:</span>
        <span>{{ user.maidenName }}</span>
      </div>
      <div class="card-row">
        <span class="label">Age:</span>
        <span>{{ user.age }}</span>
      </div>
      <div class="card-row">
        <span class="label">Gender:</span>
        <span>{{ user.gender }}</span>
      </div>
      <div class="card-row">
        <span class="label">Email:</span>
        <span>{{ user.email }}</span>
      </div>
      <div class="card-row">
        <span class="label">Phone:</span>
        <span>{{ user.phone }}</span>
      </div>
      <div class="card-row">
        <span class="label">Username:</span>
        <span>{{ user.username }}</span>
      </div>
      <div class="card-row">
        <span class="label">Password:</span>
        <span>{{ user.password }}</span>
      </div>
      <div class="card-row">
        <span class="label">Birth Date:</span>
        <span>{{ user.birthDate }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    id: Number,
    firstName: String,
    lastName: String,
    maidenName: String,
    age: Number,
    gender: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    birthDate: String,
  },
});
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color:antiquewhite;
}

.card-details {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}
</style>

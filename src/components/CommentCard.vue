<template>
    <div class="comment-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Comment ID:</span>
          <span>{{ comment.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Body:</span>
          <span>{{ comment.body }}</span>
        </div>
        <div class="card-row">
          <span class="label">Post ID:</span>
          <span>{{ comment.postId }}</span>
        </div>
        <div class="card-row">
          <span class="label">User ID:</span>
          <span>{{ comment.userId }}</span>
        </div>
        <div class="card-row">
          <span class="label">Username:</span>
          <span>{{ comment.user.username }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    comment: {
        id: Number,
        body: String,
        postId: Number,
        userId: Number,
        username: String,
    },
  });
  </script>
  
  <style scoped>
  .comment-card {
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
  
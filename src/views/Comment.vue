<template>
  <div class="container">
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script setup>
import CommentCard from '../components/CommentCard.vue';

const comments = [
  {
    id: 1,
    body: 'This is some awesome thinking!',
    postId: 100,
    user: { id: 3, username: 'eburras1q' },
  },
  {
    id: 2,
    body: 'What terrific math skills you’re showing!',
    postId: 27,
    user: { id: 1, username: 'omarsland1y' },
  },
  {
    id: 3,
    body: 'You are an amazing writer!',
    postId: 61,
    user: { id: 2, username: 'jissetts' },
  },
  {
    id: 4,
    body: 'Wow! You have improved so much!',
    postId: 8,
    user: { id: 4, username: 'bleveragei' },
  },
  {
    id: 5,
    body: 'Nice idea!',
    postId: 62,
    user: { id: 5, username: 'cmasurel1x' },
  },
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>

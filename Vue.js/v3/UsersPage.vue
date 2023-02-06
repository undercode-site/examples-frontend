<template>
  <div class="UsersPage">
    <div class="UsersPage__title">Пользователи</div>
    <UsersList
        v-model:team="team"
        v-model:page="page"
        v-model:columns-sort="columnsSort"
        :users="users"
        @refresh="refresh"
    />
  </div>
</template>

<script lang="ts" setup>
/*
* Страница вывода списка пользователей
* Используются Composition API, сложная логика вынесена в хуки и переиспользуются в многих компонентах
* Именованные модели, позволяют хранить данные на странице, а компоненту не включать в себя сложную логику
* Логика на странице связана только с сохранением данных, что позволяет переиспользовать компоненты в других целях
* */

definePageMeta({
  layout: 'sites',
});

const team = ref(false);
const columnsSort = ref<TableColumnSort>({});

const urlFetch = computed(() => {
  return {
    url: '/users',
    params: {
      myCommand: team.value ? 1 : 0,
      sort: columnsSort.value,
    },
  };
});
const {
  data: users,
  page,
  refresh,
  change,
} = useHttpPagination<User>(urlFetch.value)

watch(urlFetch, (url) => change(url), {deep: true});
</script>

<style lang="scss">
.UsersPage {
  display: flex;
  flex-direction: column;

  &__title {
    font-family: var(--accentFontFamaly);
    font-weight: 800;
    font-size: 30px;
    line-height: 34px;
    color: #3b4453;
    margin-bottom: 40px;
    padding-left: 63px;

    @include mobile {
      font-size: 22px;
      line-height: 30px;
    }
  }
}
</style>

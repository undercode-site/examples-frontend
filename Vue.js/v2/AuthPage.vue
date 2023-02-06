<template>
  <div class="AuthPage">
    <form class="AuthPage__container" @submit.prevent="authForm">
      <AuthTitle title="Введите данные" />
      <RoundInput
          autocomplete="username"
          :errors="errors.username"
          v-model="form.username"
          placeholder="E-mail или телефон"
          large
      />
      <RoundInput
          autocomplete="password"
          :errors="errors.password"
          v-model="form.password"
          type="password"
          placeholder="Пароль"
          large
      />
      <AudiConfirmProcessingPersonalDataCheckbox
          v-if="isAudiTemplateVisited"
          v-model="confirmed"
      />
      <AuthTerms v-model="terms" />
      <button class="primary large" :disabled="!terms || pending" type="submit">
        Продолжить
      </button>
      <AuthChangeLink
          label="Войти через одноразовый код"
          link-name="sign-in"
          @click="$signals.authClickSignInBySms"
      />
    </form>
  </div>
</template>

<script>
import checkNotAuth from './mixins/checkNotAuth';
import authMixin from './mixins/authMixin';
import dynamicAuthLayout from './mixins/dynamicAuthLayout';
import isAudiTemplateVisited from './mixins/isAudiTemplateVisited';

/*
* Страница авторизации через пароль
* Лаконично разделён на компоненты, компоненты принимают модели и данные, которые хранятся в корневом компоненте
* Части кода разбиты на миксины, в компоненте только основная логика по отправке формы и вывод ошибок сервера
* Это позволяет собирать подобные страницы быстро и читаемо, например авторизацию через СМС
* */

export default {
  name: "AuthPage",
  mixins: [checkNotAuth, authMixin, dynamicAuthLayout, isAudiTemplateVisited],
  data: () => ({
    terms: false,
    confirmed: false,
  }),
  methods: {
    authForm() {
      this.auth(this.confirmed).catch((e) => this.$notifySrvErr('Ошибка авторизации через пароль', e));
    },
  },
}
</script>

<style lang="scss">
.AuthPage {
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
}
</style>

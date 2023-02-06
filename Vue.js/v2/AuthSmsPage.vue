<template>
  <div class="AuthSmsPage">
    <form class="AuthSmsPage__container" @submit.prevent="authForm">
      <AuthTitle title="Введите телефон" />
      <RoundPhoneInput
          autocomplete="tel"
          v-model="phone"
          :errors="errors.phone"
          large
          required
      />
      <AudiConfirmProcessingPersonalDataCheckbox
          v-if="isAudiTemplateVisited"
          v-model="confirmed"
      />
      <AuthTerms v-model="terms" />
      <button
          type="submit"
          class="primary large full"
          :disabled="!terms || pending"
      >
        Получить код
      </button>
      <AuthChangeLink
          label="Войти через пароль"
          link-name="sign-in-password"
          @click="$signals.authClickSignInByEmail"
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
* Страница авторизации через СМС
* Лаконично разделён на компоненты, компоненты принимают модели и данные, которые хранятся в корневом компоненте
* Части кода разбиты на миксины, в компоненте только основная логика по отправке формы и вывод ошибок сервера
* Это позволяет собирать подобные страницы быстро и читаемо, например авторизацию через пароль
* */

export default {
  name: "AuthSmsPage",
  mixins: [checkNotAuth, authMixin, dynamicAuthLayout, isAudiTemplateVisited],
  data: () => ({
    terms: false,
    confirmed: false,
    phone: '',
  }),
  methods: {
    authForm() {
      this.auth(this.confirmed).catch((e) => this.$notifySrvErr('Ошибка авторизации через СМС', e));
    },
  },
}
</script>

<style lang="scss">
.page-auth-phone {
  .auth-container {
    .round-input {
      margin-bottom: 16px;
    }

    button.primary {
      margin-bottom: 24px;
    }
  }
}
</style>

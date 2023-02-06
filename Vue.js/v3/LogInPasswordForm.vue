<template>
  <form
      class="LogInPasswordForm"
      @submit.prevent="submit"
  >
    <div class="LogInPasswordForm__inputs">
      <BaseInput
          v-model="login"
          placeholder="E-mail или телефон"
          v-bind="loginProps"
      />
      <BaseInput
          v-model="password"
          placeholder="Пароль"
          type="password"
          v-bind="passwordProps"
      />
    </div>
    <div class="LogInPasswordForm__actions">
      <BaseButton
          type="submit"
          :disabled="!valid"
          :loading="pending"
          large
      >
        Войти
      </BaseButton>
      <AppLink
          class="LogInPasswordForm__link"
          to="/log-in/code/"
      >
        Войти по коду
      </AppLink>
    </div>
  </form>
</template>

<script lang="ts" setup>
/*
* Компонент авторизации
* Используются Composition API, сложная логика вынесена в хуки и переиспользуются в многих компонентах
* Базовые элементы вынесены в компоненты, что позволяет легко стилизовать и дополнять функциональность базовых элементов
* */

import {AuthVerifyResponse} from "./models/AuthVerifyResponse";
import validatorPhoneOrMail from "./validators/validatorPhoneOrMail";

const http = useHttp();
const authStore = useAuthStore();

const {useFormField, submit, form, pending, valid} = useForm(auth);
const [login, loginProps] = useFormField.required(
    'login',
    validatorPhoneOrMail
);
const [password, passwordProps] = useFormField.required('password');

function auth() {
  return http
      .post<AuthVerifyResponse>('/auth/password', form)
      .then(({token, user}) => {
        authStore.setToken(token);
        authStore.setUser(user);
        useAppRouter().push('/');
      });
}
</script>

<style lang="scss">
.LogInPasswordForm {
  max-width: 362px;
  margin-bottom: 86px;

  &__inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    .BaseInput + .BaseInput {
      margin-top: 25px;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mobile {
      display: grid;
      justify-content: unset;
      grid-gap: 25px;

      .BaseButton {
        width: 100%;
      }
    }

    .BaseButton + .BaseButton {
      margin-left: 10px;
      @include mobile {
        margin-left: 0;
      }
    }
  }

  &__link {
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 124.5%;
    color: #3b4453;
    border-bottom: 1px dotted #3b4453;

    @include mobile {
      width: max-content;
    }

    &:hover {
      color: #ff7739;
      border-bottom: 1px dotted #ff7739;
    }
  }
}
</style>

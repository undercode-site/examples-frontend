import {getErrorsForm} from "@/mixins/getErrorsForm";
import {auth} from "@/utils/auth";
import {mapMutations} from "vuex";

export default {
    mixins: [getErrorsForm('authResult')],
    middleware: 'auth',
    auth: 'guest',
    data: () => ({
        form: {
            username: '',
            password: '',
        },
        pending: false,
        remember_me: false,
    }),
    methods: {
        auth(confirmedAudi = false) {
            this.pending = true;
            return auth(this, this.form, confirmedAudi).catch((data) => {
                this.setError({
                    name: 'authResult',
                    data
                });
                return Promise.reject(data);
            }).finally(() => {
                this.pending = false;
            });
        },
        ...mapMutations('profile', ['setError'])
    }
}

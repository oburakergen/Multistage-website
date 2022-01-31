<!--
  - Copyright (c) 2021/8/17 Burak ERGEN
  -->

<template>
  <div class="full-height">
    <div class="container fill-height">
      <v-row justify="center">
        <v-col cols="12" xl="10">
          <v-row justify="center">
            <v-col lg="5" cols="12" class="mt-n6">
              <v-card
                elevation="7"
                :loading="loading"
                outlined
                class="ma-5 base"
              >
                <v-card-title class="center mt-4">
                  <h2>
                    Laraplay
                  </h2>
                </v-card-title>
                <v-card-text>
                  <div class="mt-8 mb-12">
                    <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    >
                      <v-text-field
                        id="email"
                        v-model="email"
                        name="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                      />

                      <v-text-field
                        id="password"
                        v-model="password"
                        :append-icon="show ? 'mdi-eye':'mdi-eye-off'"
                        :rules="passRules"
                        :type="show ? 'text' : 'password'"
                        name="password"
                        label="Şifre"
                        @click:append="show = !show"
                      />

                      <v-card-actions class="pt-lg-10 pt-5">
                        <v-btn
                          :disabled="!valid"
                          color="success"
                          block
                          class="mr-4"
                          @click.prevent="validate"
                        >
                          Giriş Yap
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'login',
    data () {
        return {
            valid: true,
            password: null,
            passRules: [
                v => !!v || 'Şifre gereklidir',
                v => (v && v.length <= 50) || 'Şifre Maximum 50 karakter olmalıdır'
            ],
            show: false,
            email: null,
            emailRules: [
                v => !!v || 'E-mail giriniz',
                v => /.+@.+\..+/.test(v) || 'Geçerli bir email adresi giriniz'
            ],
            loading: false
        };
    },
    mounted () {
        console.log('view', this.$store.state._csrf);
    },
    methods: {
        validate () {
            this.loading = true;

            if (this.$refs.form.validate()) {
                this.send();
            }
        },
        send () {
            const form = {
                email: this.email,
                password: btoa(window.location.origin + '?' + this.password),
                _csrf: Laraplay.storage.cookie.get('_csrf') // this.$store.state._csrf
            };

            this.$store.dispatch('auth/login', form).then(() => {
                setTimeout(() => {
                    // this.$router.push('/');
                }, 2000);
            }).catch((error) => {
                this.loading = false;
                // this.email = null;
                // this.password = null;
                console.log(error);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.full-height {
  height: 100vh!important;
}
.center {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.base {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}
</style>

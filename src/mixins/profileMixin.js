import axios from 'axios'

export default {
    created () {
        this.$_profileMixin_fetchUser(this.$route.params.username)

        const token = localStorage.getItem('tweetr-token')

        if (token) {
            this.$_profileMixin_fetchAuthenticatedUser(token)
        }
    },
    methods: {
        async $_profileMixin_fetchUser (username) {
            if (username)
            {
                const user = await axios.get(`/${username}`)
                this.user = await user.data.data
            }
            else
            {
                const token = localStorage.getItem('tweetr-token')

                const user = await axios.get('account/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                this.user = await user.data.data
            }
        },
        async $_profileMixin_fetchAuthenticatedUser (token) {
            const authUser = await axios.get('account/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            this.authUser = await authUser.data.data
        }
    }
}
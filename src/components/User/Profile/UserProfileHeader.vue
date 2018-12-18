<template>
  <div class="ui segment">
    <div class="ui grid container">
      <div class="four wide column">
        <img class="ui tiny avatar image" src="https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm">
      </div>
      <div class="bottom aligned twelve wide column">
        <div class="ui horizontal relaxed link list">
          <div class="item">
            <div class="content">
              <router-link :to="`/${user.username}`">
                <div class="header">Tweets</div>
                <strong>{{ tweetsLength }}</strong>
              </router-link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <router-link :to="isOwner ? `/following` : `/${user.username}/following`">
                <div class="header">Following</div>
                <strong>{{ followingLength }}</strong>
              </router-link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <router-link :to="isOwner ? `/followers` : `/${user.username}/followers`">
                <div class="header">Followers</div>
                <strong>{{ followersLength }}</strong>
              </router-link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <router-link :to="isOwner ? `/favorites` : `/${user.username}/favorites`">
                <div class="header">Favorites</div>
                <strong>{{ favoritesLength }}</strong>
              </router-link>
            </div>
          </div>
        </div>
        <div class="ui right floated horizontal list" v-if="isOwner">
          <router-link to="/settings/profile" class="ui button primary">Edit profile</router-link>
        </div>
        <div class="ui right floated horizontal list" v-if="isLoggedIn && !isOwner">
          <button class="ui tiny primary button" v-if="isFollowing" @click="unFollow(user.id)">Unfollow</button>
          <button class="ui tiny primary button" v-else @click="follow(user.id)">Follow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UserProfileHeader',
    props: {
        user: {
            type: Object,
            required: true
        },
        authUser: {
            type: Object,
            required: true
        }
    },
    computed: {
        isOwner () {
            return this.user.id === this.authUser.id
        },
        isLoggedIn () {
            return !!this.authUser
        },
        isFollowing () {
          if (this.authUser && this.authUser.following)
          {
            for (let following of this.authUser.following) {
              if (following.id === this.user.id) {
                  return true
              }
            }
          }

          return false
        },
        tweetsLength () {
          return this.user ? (this.user.tweets ? this.user.tweets.length : 0) : 0
        },
        followingLength () {
          return this.user ? (this.user.following ? this.user.following.length : 0) : 0
        },
        followersLength () {
          return this.user ? (this.user.followers ? this.user.followers.length : 0) : 0
        },
        favoritesLength () {
          return this.user ? (this.user.favorites ? this.user.favorites.length : 0) : 0
        }
    },
    methods: {
        follow (userId) {
            const token = localStorage.getItem('tweetr-token')

            axios.post(
                '/users/follow',
                { user_id: userId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then(response => {
                this.authUser.following.push({ id: userId })
            })
        },
        unFollow (userId) {
            const token = localStorage.getItem('tweetr-token')

            axios.delete(`/users/unfollow/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                this.authUser.following = this.authUser.following.filter(u => {
                    return u.id !== userId
                })
            })
        }
    }
}
</script>
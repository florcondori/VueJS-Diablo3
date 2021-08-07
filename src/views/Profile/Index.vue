<template>
  <div>
      <Loading v-if="isLoading" />
      <template v-if="profileData!==null">
          <MainBlock :profile-data="profileData"/>
          <ArtisansBlock :artisans-data="artisansData" />
      </template>
  </div>
</template>

<script>
import setApiErr from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import Loading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'Profile',
  components: { Loading, MainBlock, ArtisansBlock },
  data () {
    return {
      profileData: null,
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    // this.$route.params -> { region: "eu", battleTag: "SuperRambo-2613" }
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
      // Llamada API
      getApiAccount({ region, account })
        .then(data => {
          this.profileData = data.data
        })
        .catch(err => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          setApiErr(errObj)
          this.$route.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  }
}
</script>

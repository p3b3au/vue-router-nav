<template>
    <main>
        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="team">
                <div
                    class="team_member"
                    v-for="(team, index) in teams"
                    :key="index"
                    @click="goToMemberCard(index)"
                >
                    <div class="team_img">
                        <img :src="displayPic(team)" alt="Team_image" />
                    </div>
                    <h3>{{ team.firstName }}</h3>
                    <p class="role">{{ team.jobTitle }}</p>
                    <p>{{ team.verbatim }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { teams } from '@/assets/js/appTeams.js'

export default {
    name: 'App',
    components: {},
   
    data: () => ({
        teams: teams,
    }
    ),
    methods: {
        displayPic(team) {
            return require('@/assets/img/' + team.profilePic.substring(0, 8) + '_round.png')

        },
        goToMemberCard(index) {
            this.$router.push({name:'member', params:{memberId:index}});
           
       }

    }
}
</script>
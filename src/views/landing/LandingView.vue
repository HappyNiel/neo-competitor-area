<template>
    <div class="LandingView">
        <div class="HeroContainer">
            <div class="IntroductionContainer">
                <h1 class="Hero IntroductionTitle">Welcome to the NEO competitor area</h1>
                <h2 class="IntroductionTagline">The central hub to get your team on track.</h2>
            </div>
        </div>
        <!-- TODO:L Create better text and entry point for user. -->
        <div class="Container">
            <p>The NEO Competitor area is the central place where competitors can find all information about competing in the NEO Endurance Series.</p>
            <p>If there is any information missing, please contact us. We will solve the issue as soon as possible.</p>
            <p class="TextDevelopment">
                <em>This platform is currently in developement. If you have any questions or feedback, don't hesitate to contact us.</em>
            </p>
        </div>
    </div>
</template>

<script lang="ts" src="./LandingView.ts"></script>
<style lang="scss" scoped>
@import "../../styles/abstracts/Variables";

.HeroContainer {

    .IntroductionContainer {
        color: $White;
        text-align: center;

        .IntroductionTitle {
            font-weight: $Bold;
        }

        .IntroductionTagline {
            font-weight: $Regular;
            font-size: 1.3rem;
        }
    }
}
</style>

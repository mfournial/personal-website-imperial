<template>
  <section class="container">
    <div class="container">
      <div class="mt-3 text-center text-dark container">
        <h2>
        <b-spinner variant="danger" type="grow" label="Spinning" />
          Good {{ timeGreeting(new Date().getHours()) }}
        <b-spinner variant="danger" type="grow" label="Spinning" />
        </h2>
      </div>
      <h3 class="text-info">Imperial notes</h3>
      <div class="text-justify container">
        <p>
          You'll find on here the links to the <nuxt-link to="/notes/year1">year 1</nuxt-link>, <nuxt-link to="/notes/year2">year 2</nuxt-link>, and <nuxt-link to="/notes/years3-4">year 3 & 4</nuxt-link> notes. You can choose to simply download them or contribute to help maintaining them. A special thanks to all the students who've helped putting them up.
        </p>
      </div>
      <h3 class="text-info">About me</h3>
      <div class="text-justify container">
        <p>
          I am a penultimate year student at Imperial College London studying Joint Maths and Computing (<a href="https://www.imperial.ac.uk/computing/current-students/jmc-info/">JMC MEng</a>). I am the current academic year representative of my cohort and was elected to be the departmental academic representative of JMC for the year 2019/2020. I'm also a tennis fan <span v-on:click="changeAnimationStatus">({{ flag1 }} > {{ flag2 }} > {{ flag3 }})</span> and enjoy playing the piano 🎹.
        </p>
        <p>
          I am on track to achieve a first class degree and I received two prizes for my work at Imperial. I was awarded the Olav Beckmann prize at the end of second year for outstanding second year undergraduate laboratory project work as well as the David Howarth prize for the Voodoo database. Please see my projects on <a href="https://linkedin.com/in/mfournial">LinkedIn</a> or my <nuxt-link to="/CV/cv-mayeul-FOURNIAL.pdf">CV</nuxt-link>, and Imperial's <a href="http://www.imperial.ac.uk/computing/prospective-students/distinguished-projects/ug-prizes/"> project page</a> and <a href="https://www.imperial.ac.uk/computing/current-students/project-info/ug-prizes/archive/"> archive</a> for more details.
        </p>
      </div>
      <h3 class="text-info">RIP browser history</h3>
      <div class="text-justify container">
        <p>
          Fancy to see some URL animations (but you will not be able to use the back button on this site until your next visit)? 
        </p>
        <div class="text-center container">
          <b-button v-on:click="clickURL" variant="success">{{ buttonText[textPosition] }}</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            description: "Personal website of Mayeul Mike Fournial where you can find collaborative notes.",
            title: "Index",
            flag1: "🇨🇭",
            flag2: "🇷🇸",
            flag3: "🇪🇸",
            animate: true,
            colours: ['🏻', '🏼', '🏽', '🏾', '🏿'],
            coloursPosition: 0,
            buttonText: ["Launch URL animation", "Make it stop"],
            textPosition: 0,
            handle: null,
        }
    },
    head () {
        return {
            title: "Mayeul Mike Fournial | ".concat(this.title),
            meta: [
                { hid: "description", name: "description", content: this.description },
            ],
        }
    },
    methods: {
        clickURL: function() {
            if (this.handle == null) {
                this.handle = setInterval(this.nextFrameURL, 70);
                this.textPosition = 1;
            } else {
                clearInterval(this.handle);
                this.handle = null;
                this.textPosition = 0;
            }
        },
        nextFrameURL: function() {
            var hash = '';
            
            for (var i = 0; i < 30; i ++) {
                hash += '🤷' + this.colours[(i + this.coloursPosition) % this.colours.length];
            }
            location.hash = hash;
            this.coloursPosition = (this.coloursPosition + 1) % this.colours.length;
        },
        timeGreeting: function(currentHour) {
            if (4 <= currentHour && currentHour < 12) {
                return "morning";
            } else if (12 <= currentHour && currentHour < 19) {
                return "afternoon";
            } else if (19 <= currentHour && currentHour < 23) {
                return "evening";
            } else {
                return "night?? It's late to be up here";
            }
        },
        animateFlags: function() {
            if (this.animate) {
                var tmp = this.flag1;
                this.flag1 = this.flag2;
                this.flag2 = this.flag3;
                this.flag3 = tmp;
            }
        },
        changeAnimationStatus: function() {
            this.animate = !this.animate;
        }
    },
    beforeMount() {
        setInterval(this.animateFlags, 600);
    },
}
</script>


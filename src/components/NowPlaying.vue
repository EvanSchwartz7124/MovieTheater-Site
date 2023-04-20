<template>
  <!--Div creates the bootstrap albumn to hold cards of movies-->
  <div class="NowPlaying" id="NowPlaying">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="container">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Movie from "./Movie.vue";
import Vue from 'vue'
console.log("Now Playing Component Loaded");
  export default {
    name: 'NowPlaying',
    components: {
    },
    //Holds the data to be returned to parent
    data(){
      return{
        Movies: []//Array of Movies to hold the movie components
        };
      },
    //Method to run on component creation, calls the GetMovies method to populate Movies array by calling the API
    created: function(){
      this.GetMovie();
    },
    methods: {
      //Method to call database api, and generate movie components for each movie passsed.
      GetMovie()
      {
        console.log("GetMovie called")
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=765e74bfd81dea6397fb9169f31e656b&language=en-US&page=1"//Var to hold the url for database
        var posterPath = "https://image.tmdb.org/t/p/w500";//Var to hold the url for movie posters
        
        axios.get(url)//Axios get request sends api call
        .then ( response => { //Recieves response then runs the following function
          for (let i = 0; i < response.data.results.length; i++)//Loops through each object returned from the api call
          {
            var ComponenClass = Vue.extend(Movie)//Grabs the Movie component using Vue to create a new instance for each iteration
            var instance = new ComponenClass({//Passes in the title, image, and poster from API obj, into the props of the newly created component
              propsData: {MovieTitle: response.data.results[i].title, MovieImage: posterPath + response.data.results[i].poster_path, MovieDesc: response.data.results[i].overview},
              parent: this//Assigns the current component as the parent of the newly generated movie component
            })
            instance.$mount()//Mounts the newly created component
            document.getElementById('container').appendChild(instance.$el)//Appends the new component to the div in the current template
          }
          console.log(this.$children);
        })
      },
      AddChild(title)//Emits the movie title to parent when called. Uses AddChild method
      {
        this.$emit("AddChild", title);
      },
      AddAdult(title)//Emits the movie title to parent when called. Uses AddAdult method
      {
        this.$emit("AddAdult", title);
      }
    }
  }
</script>


<style>
#NowPlaying {
  text-align: center;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>

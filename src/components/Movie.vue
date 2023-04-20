<template>
    <!--Card div using bootstrap-->
    <div id="card" class="col">
        <div class="card shadow-sm">
            <img v-bind:src="MovieImage" />
            <div class="card-body">
                <h5>{{ MovieTitle }}</h5>
                <p class="card-text">{{MovieDesc}}</p>
                <!--Button to call component method to add adult ticket-->
                <button @click="AddAdult" type="button" class="btn btn-secondary">Add Adult Ticket</button>
                <!--Button to call component method to add child ticket-->
                <button @click="AddChild" type="button" class="btn btn-secondary">Add Child Ticket</button>
            </div>
        </div>
    </div>
</template>

<script>

console.log("Movie Component Called")
    export default {
        name: "MovieCard",
        //props to reciecve title, image, and description and populate card from parent method
        props: ['MovieTitle', 'MovieImage', 'MovieDesc'],
        //Holds and returns the data when called from parent
        data: function(){
            return {
                Title: this.MovieTitle,
                Desc: this.MovieDesc,
                Image: this.MovieImage
            }
        },
        methods: {
            //Method to pass current component title to parent component, calling AddAdult method to add adult ticket
            AddAdult()
            {
                this.$parent.AddAdult(this.Title);
            },
            //Method to pass current component title to parent component, calling AddChild method to add child ticket
            AddChild()
            {
                this.$parent.AddChild(this.Title);
            }
        }
    }
</script>


<style>
#card {
  text-align: center;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
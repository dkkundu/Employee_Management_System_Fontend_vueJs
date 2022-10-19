<template>
  <form class="update-form">
    <div class="form-row">
      <div class="form-group col-md-6">
        <div class="row">
          <div class="col-md-12">
            <label for="inputName">Name</label>
              <input type="text" class="form-control" id="inputName" placeholder="Full Name">
          </div>

           <div class="col-md-12">
            <label for="inputPhone">Phone</label>
              <input type="text" class="form-control" id="inputPhone" placeholder="+88018XXXXXXXX">
          </div>


         <div class="col-md-12">
            <label for="inputPhoto">Photo</label>
              <input type="file" class="form-control" id="inputPhoto" @change="onFileChange">
          </div>


        </div>

      </div>

      <div id="existing_image" class="form-group col-md-6">
        <img class="preview-image" id="blah" src="../assets/image/preview-icon.png" alt="preview-page" />
      </div>
      <div id="preview">
      <img class="preview-image" v-if="url" :src="url" />
    </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress"
             placeholder="1234 Main St">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2"
             placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

</template>

<script>
export default {
  name: "AddEmployee",

  mounted(){
    this.onFileChange()

  },
  methods:{

    onFileChange(payload) {
      //const file = payload.target.files[0]; // use it in case of normal HTML input
      const file = payload; // in case vuetify file input
      if (file) {
        this.imagePreviewURL = URL.createObjectURL(file);
        URL.revokeObjectURL(file); // free memory
      } else {
        this.imagePreviewURL =  null
      }
    }

  }
}
</script>

<style scoped>
img#blah {
    width: 212px;
    margin-left: 36%;
}


</style>
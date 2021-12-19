<template>
    <div class="about" style="background-color:#484545;">
      <Navbar />
    <div class="container">
        <h1 class="fw-bolder text-light">About us</h1>
         <hr />
        <div class="row">
            <div class="col-md-12">
                <p class="text-light">Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, diam et semper ultrices, neque libero eleifend augue, in consequat eros dui ac dolor. Nulla hendrerit nisl et nunc bibendum, id aliquet lectus consequat. In hac habitasse platea dictumst. Praesent ante dui, porttitor in felis sed, tincidunt congue diam. Nunc a enim eget massa bibendum sodales. Vestibulum ultrices mi tortor, vitae dictum erat dictum quis. Donec sodales facilisis sollicitudin. Fusce arcu nisl, gravida id porttitor ut, maximus tincidunt libero. Etiam commodo risus augue, sed sollicitudin nibh posuere et.

In in interdum nisi. Fusce accumsan eleifend finibus. Proin imperdiet felis eros, quis dictum sapien porta ac. Ut et scelerisque felis. Ut nec tempus justo, sed varius lorem. Mauris et ante pretium libero blandit mollis id nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam in enim odio. Quisque nisi arcu, ullamcorper vitae purus mollis, lobortis gravida ante. Curabitur elementum arcu et velit dictum, nec aliquam sapien viverra.

Nam ultricies eu magna nec condimentum. Pellentesque malesuada, quam sit amet aliquet suscipit, lectus nibh dignissim tortor, at ultrices nulla purus quis ex. Maecenas eu scelerisque arcu. Pellentesque suscipit felis at nulla faucibus viverra at sed ex. Nulla arcu nisi, pharetra vel purus vel, ullamcorper consequat velit. Fusce viverra posuere elit, nec mattis sem venenatis et. Aenean laoreet, urna in pulvinar finibus, enim ligula tempor tortor, ac hendrerit elit quam cursus quam. Vivamus id libero ut justo vulputate fermentum ac sed mi. Integer ligula nisi, feugiat non pretium et, molestie ut turpis. Sed metus ex, tristique eget posuere ut, malesuada sit amet mauris. Vivamus pulvinar efficitur ante vitae commodo. Quisque consequat consectetur quam, nec vulputate massa. Praesent eu volutpat quam. Quisque nunc ante, scelerisque eu egestas et, mollis sed erat. Fusce interdum massa in lobortis gravida. Nullam ac condimentum felis.

Maecenas quis eros eu tellus imperdiet luctus vel in dolor. Sed bibendum arcu lorem, sed maximus mi ultrices in. Donec maximus ut elit at auctor. Integer elementum porta faucibus. Quisque sit amet enim massa. In porttitor urna quis eros suscipit interdum. Duis sollicitudin, ipsum at pharetra blandit, mauris erat sagittis lorem, non volutpat turpis massa et nulla. In hac habitasse platea dictumst. Curabitur erat neque, hendrerit non magna non, dignissim luctus elit. Nulla molestie sem eu nunc convallis, vel ultrices eros tempor. Nullam sed euismod risus. Fusce diam nunc, rutrum sed justo ac, porta placerat nisi. Nulla pharetra convallis turpis in convallis. Donec ornare, velit non gravida fringilla, leo mauris fermentum quam, id hendrerit ligula lacus id elit.

Nam orci nulla, venenatis nec ultrices et, sagittis ac mauris. Fusce tincidunt sapien magna, id placerat ligula volutpat id. Nullam ultricies odio quam. Sed lacinia fringilla est eu placerat. Phasellus auctor lacinia mauris eu mattis. Nulla facilisi. In ac elit iaculis enim mattis ornare. Sed vitae viverra massa. Aenean mattis, nibh eget iaculis pulvinar, nisl est ornare ex, eget posuere sapien sem ut mi. Aenean magna velit, porta a nulla id, mattis bibendum nibh. Nunc vitae gravida sapien.

Generated 5 paragraphs, 498 words, 3286 bytes of Lorem Ipsum</p>
                <hr>
            </div>  
        </div>    
    </div>
    
     <Footer />
    </div>
     
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components:{
    Navbar,
    Footer
  },
}
</script>

<style >

html, body, #app{
  width:100%;
  height: 100%;
}
p {
  font-family: "Times New Roman", Times, serif;
  color: black;
}
.about{
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  justify-content: space-between;
}
</style>
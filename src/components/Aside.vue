<template>
  <aside class="aside-menu">
    <b-tabs>
      <b-tab title="<i class='icon-list'></i>">
        <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
          <small><b>今日</b></small>
        </Callout>
        <hr class="transparent mx-3 my-0">
        <Callout variant="warning" class="m-0 py-3">
          <!-- <div class="avatar float-right">
             <img src="static/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
           </div>
           <div><strong> Meeting with  Lucas</strong></div>
           <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
           <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA </small>-->
         </Callout>
         <hr class="mx-3 my-0">
        <hr class="transparent mx-3 my-0">
        <Callout class="m-0 py-2 text-muted text-center bg-light text-uppercase">
          <small><b>明日</b></small>
        </Callout>
        <hr class="transparent mx-3 my-0">
         <Callout variant="danger" class="m-0 py-3">
           <!-- <div><strong> New UI Project -  deadline</strong></div>
            <small class="text-muted mr-3"><i class="icon-calendar"></i>&nbsp; 10 - 11pm</small>
            <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ </small>
            <div class="avatars-stack mt-2">
              <div class="avatar avatar-xs">
                <img src="static/img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="avatar avatar-xs">
                <img src="static/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="avatar avatar-xs">
                <img src="static/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="avatar avatar-xs">
                <img src="static/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              </div>
              <div class="avatar avatar-xs">
                <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
              </div>
            </div>-->
          </Callout>
          <hr class="mx-3 my-0">
      </b-tab>
      <b-tab title="<i class='icon-speech'></i>">
        <div class="p-3">
          <div class="message">
           <!-- <div class="py-3 pb-5 mr-3 float-left">
              <div class="avatar">
                <img src="static/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                <b-badge variant="success" class="avatar-status" ></b-badge>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>-->
          </div>
          <hr>
        </div>
      </b-tab>
    </b-tabs>
  </aside>
</template>

<script>
  import Callout from './Callout'
  import cSwitch from './Switch'
  export default {
    name: 'aside',
    components: {
      Callout,
      cSwitch
    }
  }
</script>

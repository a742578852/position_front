<template>
  <div id="main">
    <div class="main">
      <i class="el-icon-s-fold" @click="isClose"></i>
      <i class="el-icon-s-home" @click="isHome"></i>
    </div>
    <div class="content">
      <my-foreign v-if="this.menus==11"></my-foreign>
      <my-personnel v-else-if="this.menus==12"></my-personnel>
      <my-alarmlist v-else-if="this.menus==21"></my-alarmlist>
      <my-alarmtemplate v-else-if="this.menus==22"></my-alarmtemplate>
      <my-post v-else-if="this.menus==31"></my-post>
      <my-people v-else-if="this.menus==32"></my-people>
      <my-department v-else-if="this.menus==33"></my-department>
      <my-structure v-else-if="this.menus==34"></my-structure>
      <my-positioningcard v-else-if="this.menus==41"></my-positioningcard>
      <my-video v-else-if="this.menus==42"></my-video>
      <my-areatype v-else-if="this.menus==51"></my-areatype>
      <my-areastatistics v-else-if="this.menus==52"></my-areastatistics>
      <my-riskzoning v-else-if="this.menus==53"></my-riskzoning>
      <my-role v-else-if="this.menus==61"></my-role>
      <my-account v-else-if="this.menus==62"></my-account>
      <my-map v-else-if="this.menus==63"></my-map>
      <my-parameter v-else-if="this.menus==64"></my-parameter>
      <my-log v-else-if="this.menus==65"></my-log>
      <my-workshopstatistics v-else-if="this.menus==71"></my-workshopstatistics>
      <my-factorystatistics v-else-if="this.menus==72"></my-factorystatistics>
      <my-warningdisplay v-else-if="this.menus==73"></my-warningdisplay>
      <my-externalrecords v-else-if="this.menus==74"></my-externalrecords>
      <my-behavioranalysis v-else-if="this.menus==75"></my-behavioranalysis>
      <my-track v-else-if="this.menus==76"></my-track>
      <my-home v-else-if="this.menus==1"></my-home>
      <my-cockpit v-else-if="this.menus==77"></my-cockpit>
      <my-home v-else></my-home>
    </div>
  </div>
</template>

<script>
import  { EventBus }  from "../../public/EventBus";
import MyForeign from "../components/inOut/Foreign";
import MyPersonnel from "../components/inOut/Personnel";
import MyAlarmlist from "../components/warning/Alarm-list";
import MyAlarmtemplate from "../components/warning/Alarm-template";
import MyPost from "../components/personnel-organization/Post";
import MyPeople from "../components/personnel-organization/People";
import MyDepartment from "../components/personnel-organization/Department";
import MyStructure from "../components/personnel-organization/Organizational-structure";
import MyPositioningcard from "../components/equipment/Positioning-card";
import MyVideo from "../components/equipment/Video";
import MyAreatype from "../components/area/Area-type";
import MyAreastatistics from "../components/area/Area-statistics";
import MyRiskzoning from "../components/area/Risk-zoning";
import MyRole from "../components/system/Role";
import MyAccount from "../components/system/Account";
import MyMap from "../components/system/Map";
import MyParameter from "../components/system/Parameter";
import MyLog from "../components/system/Log";
import MyWorkshopstatistics from "../components/cockpit/Workshop-statistics";
import MyFactorystatistics from "../components/cockpit/Factory-statistics";
import MyWarningdisplay from "../components/cockpit/Warning-display";
import MyExternalrecords from "../components/cockpit/External-records";
import MyBehavioranalysis from "../components/cockpit/Behavior-analysis";
import MyTrack from "../components/cockpit/Track";
import MyHome from '../components/Home';
import MyCockpit from '../components/cockpit/Cockpit';
export default {
    data() {
        return {
            menus: 0
        }
    },
  components: {
    MyHome,
    MyForeign,
    MyPersonnel,
    MyAlarmlist,
    MyAlarmtemplate,
    MyPost,
    MyPeople,
    MyDepartment,
    MyStructure,
    MyPositioningcard,
    MyVideo,
    MyAreatype,
    MyAreastatistics,
    MyRiskzoning,
    MyRole,
    MyAccount,
    MyMap,
    MyParameter,
    MyLog,
    MyWorkshopstatistics,
    MyFactorystatistics,
    MyWarningdisplay,
    MyExternalrecords,
    MyBehavioranalysis,
    MyTrack,
    MyCockpit,
  },
  methods: {
    isClose() {
      EventBus.$emit("msg", "msg");
    },
    isHome(){
      this.menus = 1
    }
  },
  mounted () {
        var _this = this
        EventBus.$on('val',function(value){
            _this.menus = value
        })
    }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid;
    border-color: aquamarine;
    line-height: 40px;
    font-size: 26px;
    .el-icon-s-home {
      margin-left: 8px;
    }
  }
}
</style>
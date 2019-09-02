<!--  -->
<template>
<div class="understandNurse">
  <div class="topLink">
    <p>老年公寓><span>老人心声</span></p>
  </div>
  <div class="titHead">
    <h2>{{titHead}}</h2>
    <p>{{titDis}}</p>
  </div>
  <div class="mainContent" v-for="(item, dataListIndex) in dataList" :key="dataListIndex">
    <div class="content1" v-for="(item1, content1Index) in item.content1" :key="content1Index">
      <div class="contentTit">
        <h3>{{item1.tit}}</h3>
        <span></span>
      </div>
      <div class="content1-list">
        <p v-for="(item2, listContentIndex) in item1.listContent" :key="listContentIndex">{{item2}}</p>
        <img :src="item1.imgUrl" alt="">
      </div>
    </div>
    <div class="content2" v-for="(item3, content2Index) in item.content2" :key="content2Index">
      <div class="contentTit">
        <h3>{{item3.tit}}</h3>
        <span></span>
      </div>
      <p>{{item3.titDis}}</p>
      <img :src="item3.imgUrl" alt="">
      <div class="contentItem" v-for="(item4, contentItemIndex) in item3.content" :key="contentItemIndex">
        <h4>{{item4.tit}}</h4>
        <div class="listItem" v-for="(item5, listItemIndex) in item4.listItem" :key="listItemIndex">
          <p>{{listItemIndex+1}}、{{item5.tit}}</p>
          <p>{{item5.listContent}}</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      titHead: '长期看护保险',
      titDis: '一首“春天里”唱出了当下许多人的心声，如今随着我国老龄化日益加剧，不少人开始担心自己老了之后的生活是否会过的“老有所依”。几十年后，还有谁能照顾已经白发苍苍、寸步难行的自己呢？也许有些人会开始逃避，不愿去面对自己老了之后的样子。但随着我国老龄化现象在逐年增加，子女们赡养老人的压力越来越大，面对着人们的生活水平参差不齐的当下，如何摆脱并解决这一现象已经迫在眉睫，要想在晚年时过的舒心自在，及时为自己准备好一份长期看护险是必然的。',
      dataList: [{
          content1: [{
            tit: '长期看护险有何特点与作用',
            listContent: [
              '长期看护保险的出现，可以说是人口老龄化的产物。这种产品的出现，不仅在我国有其必然性，全球也是如此。那么它有何特点与作用呢？之所谓叫长期看护保险，那么它必然是倾向于提供长期护理保障的一种保险。它在保障范围上有4个等级，分别为：医护人员看护、中级看护、照顾看护以及家中看护。',
              '它的在类型上也分为许多不同形式，比如：津贴、费用补偿等单一或交叉的形式。给付期限分为1年、数年或终身等几种不同的选择，免责期在20~100天不等。免责期愈长，保费愈低。',
              '此外，长期看护险一般都设有豁免保障，且它的保单都是保证续保的，甚至有些还保证至终身续保，以至于保险公司不得在保单更新时针对个人提高保险费率，这就导致了它的承保价格较高。而长期看护保险有不没收价值条款，即当被保险人撤销其现存保单时，保险人会将保单积累的现金价值退还给投保人。对于长期卧病在床的患者和老年人来说，长期看护保险具有很好的经济保障作用，它能为患者的家庭减轻护理费用的负担。'
            ],
            imgUrl: require('@/assets/img/understandNurse/img1.jpg'),
          }],
          content2: [{
            tit: '长期看护险有哪些种类',
            titDis: '那么长期看护险有哪些种类呢？小编带大家一起来了解一下。',
            content: [{
                tit: '（一）按保险责任分类',
                listItem: [{
                    tit: '单一责任护理保险',
                    listContent: '该险种除非附加或者附约，否则仅仅承担长期护理责任，即在保险期间内被保险人接受符合条件的护理服务，保险公司则接规定给付保险金。这种保险单可能带来的问题是，被保险人交付多年保费后没来得及领取保险金就已经死去，其家属容易产生对保险公司的不满情绪。'
                  },
                  {
                    tit: '综合责任护理保险',
                    listContent: '即在承担长期护理责任的基础上，增加生存和死亡给付责任，生存给付可采取一次性给付和年金给付的形式。'
                  },
                  {
                    tit: '失能收入损支保险的扩展',
                    listContent: '残疾者在退休前购买的长期看护保险，在其退休后，保险公司提供给被保险人与失能收入补偿等额的保险金。在投保时不需要核保，只是要比正常人多交一些保费，实际上是将失能收入保险自动转为长期看护保险。'
                  },
                  {
                    tit: '医疗费用保险附约',
                    listContent: '长期看护保险类似于医疗费用保险，二者的主要区别在于：医疗费用保险是对被保险人的偶然性的急性疾病的费用提供保障，而长期看护保险则是对被保险人因慢性疾病或健康状况恶化所发生的费用提供保障。但两者都涉及费用补偿，所以，可以将长期看护保险视为医疗费用保险的一种延伸。'
                  }
                ]
              },
              {
                tit: '（二）按投保人划分',
                listItem: [{
                    tit: '个人长期看护保险，与市场上其他个人寿险具有相同特点。',
                    listContent: ''
                  },
                  {
                    tit: '团体长期看护保险，它可分为雇主型保险计划和非雇主保险计划两种。',
                    listContent: ''
                  }
                ]
              },
              {
                tit: '（三）按保额是否变化',
                listItem: [{
                    tit: '保额固定型，即按合同中约定的金额给付，固定不变。',
                    listContent: ''
                  },
                  {
                    tit: '保额递增型，即随着生活费用指数和护理院的护理费用指数的变化，逐年增加保险金给付。',
                    listContent: ''
                  }
                ]
              }
            ],
            imgUrl: require('@/assets/img/understandNurse/img2.jpg'),
          }]
        },
        {
          content1: [{
            tit: '如何认定长期看护状态',
            listContent: [
              '生活中，也许会遇见很多瘫痪在家需要照顾的老人或残疾人，这些往往都发生在我们身边，如果家人们无暇照顾，那么就需要聘请专业的看护人员帮忙照顾，但这些都是需要一定的看护费用的，并不是普通的医疗险就能够承担。',
              '那么如何认定一个人是处于需要长期看护的状态呢？',
              '据了解，当某个人正处于“行为活动能力丧失”或“认知能力错误”时，那么这个人就需要他就需要长期看护。所谓行为活动能力丧失，就是指基本处于卧床状态，无法单独步行、穿衣脱衣、洗澡、进食、控制排便等日常行为，通常只要符合其中二项以上者，都可认为是行为活动能力丧失。',
              '而认知能力出现错误，就是指在某个人在自己意识清醒的情形下有分辨上的障碍异常，主要在“时间”、“场所”、“人物”3项分辨障碍中，超过2项以上的人，比如精神病、老年痴呆、抑郁症等符合这3项分辨障碍的异常。'
            ],
            imgUrl: require('@/assets/img/understandNurse/img3.jpg'),
          }],
          content2: [{
            tit: '长期看护险的给付责任如何确定',
            titDis: '长期看护保险负责许多治疗性质的护理服务，而它的给付责任通常通过以下几个标准来确定。',
            content: [{
                tit: '（一）给付条件',
                listItem: [{
                    tit: '医学上的必要性与住院治疗。为了防止被保险人私自获取护理保险金，保险公司在被保险人住进护理院时要求与进医院一般无二。',
                    listContent: ''
                  },
                  {
                    tit: '日常活动失败。简单来说，就是指人们日常生活中所必须要做的行为活动，比如起居活动、穿衣脱衣、洗漱、饮食、行走、排便等，在无他人的帮助下，完成不了这些日常活动，就称为失败。',
                    listContent: ''
                  },
                  {
                    tit: '认知能力障碍。有些在认知能力方面有异常障碍的人，却可以执行日常活动，根据这一矛盾，保险公司对于认知能力障碍这一点增加了给付标准。如果被保险人被诊断为在某方面有认知能力障碍，就可以得到保险金。',
                    listContent: ''
                  }
                ]
              },
              {
                tit: '（二）护理服务',
                listItem: [{
                    tit: '医护人员看护。这是看护保障中的最高等级，由专门医师嘱咐的24小时看护，且看护人员大多都有特殊护理专项、有执照的人担任。',
                    listContent: ''
                  },
                  {
                    tit: '非连续性的医护人员看护。与医护人员看护类似，不过不需要24小时看护。',
                    listContent: ''
                  },
                  {
                    tit: '照顾式看护。只需在日常生活上加以照顾，并不需要看护人员有专门的特长。',
                    listContent: ''
                  },
                  {
                    tit: '家中看护。需看护人员到家中进行护理服务，它还包括到医院、药店、超级市场的交通服务，购买日常生活用品的服务等。',
                    listContent: ''
                  }
                ]
              },
              {
                tit: '（三）费用补偿',
                listItem: [{
                    tit: '按照给付的范围有两种费用补偿方式，第一种是仅在护理院接受护理的费用来给予补偿，这种的问题在于，如果被保险人生活完全无法自理，但不愿去护理院，而是请人专门护理，那么就得不到费用补偿。而第二种是符合所有给付条件的护理费用给予补偿，这种问题是在家与在护理院的费用差别较大。',
                    listContent: ''
                  },
                  {
                    tit: '按照给付是否可变又可分为：按发生额给付和按固定金额给付两种。前一种是拿护理费用发票领取保险金，保险公司给付的最高金额不超过保险金额；后一种是不管发生费用的多少，都按合同约定的数额给付。 ',
                    listContent: ''
                  }
                ]
              }
            ],
            imgUrl: require('@/assets/img/understandNurse/img4.jpg'),
          }]
        },
        {
          content1: [{
            tit: '长期看护险适合哪些人群',
            listContent: [
              '虽然长期看护险的优势显而易见，但是毕竟它的费率还是较高的。为此，小编认为，还是中等收入族群比较适合在年轻时选购该类产品，为年老以后作保障，以下三类族群尤其适合：',
              '第一类指的是不婚族或晚育、不育族。这类人在自己年轻时的养育负担并不重，但由于晚婚晚育，很容易导致自己已老、孩子还未成年的现象出现，子女根本没办法赡养老人，而基本的社保也肯定满足不了老年护理的费用支出，所以这类人必须及早做好规划。~100天不等。免责期愈长，保费愈低。',
              '第二类是比较重视退休之后的晚年生活的“蚂蚁族”。这类人由于非常注重自己身体健康，所以在晚年规划时，也要提前筹备好长期看护的保障。',
              '最后一类就是肩负赡养父母责任的大多数年轻人。我国目前处于二三十岁的年轻人比较多，将来赡养老人的责任也很重，而自己因为年轻因为目前二三十岁的奋斗的原因，难以日日照料老人，因此需要购买长期看护类的保障，来减轻自己未来的压力。 '
            ],
            imgUrl: require('@/assets/img/understandNurse/img5.jpg'),
          }],
          content2: {}
        },

      ]
    };
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.understandNurse {
  width: 1200px;
  margin: 0 auto;

  p {
    line-height: 1.6;
  }

  .contentTit {
    display: flex;

    h3 {
      display: block;
    }

    span {
      width: 100%;
      height: 1px;
      display: block;
      background: #999;
    }
  }

  .topLink {
    margin: 50px 0;

    span {
      color: #038489;
    }
  }

  .titHead {

    h2 {
      text-align: center;
      font-size: 24px;
      padding: 0 0 30px 0;
      border-bottom: 1px solid #999;

    }

    p {
      margin: 28px auto 42px;
      text-indent: 2em;
    }
  }
}
</style>

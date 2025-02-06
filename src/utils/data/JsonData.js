import {images} from '../../assets';
import {Routes, StackNames} from '../../navigation/Routes';

export const OnBoardingData = [
  {
    category: 'Retailer',
    key: '21o',
    options: [
      {key: '1', name: 'Sleep Shop', selected: false},
      {key: '2', name: 'Furniture Store', selected: false},
      {key: '3', name: 'Big Box', selected: false},
      {key: '4', name: 'E-Commerce only', selected: false},
      {key: '5', name: 'Other', selected: false},
      // {id: 5, name: 'Other', selected: false},
    ],
  },
  {
    category: 'Manufacturer',
    key: '343go',
    options: [
      {key: '1', name: 'Mattress', selected: false},
      {key: '2', name: 'Adjustable Base', selected: false},
      {key: '3', name: 'Soft Goods', selected: false},
      {key: '4', name: 'Furniture', selected: false},
      {key: '5', name: 'Bed_Frame/Platform', selected: false},
      {key: '6', name: 'Other', selected: false},
    ],
  },
  {
    category: 'Supplier',
    key: 'ihn9',
    options: [
      {key: '1', name: 'Textiles', selected: false},
      {key: '2', name: 'Springs', selected: false},
      {key: '3', name: 'Foam', selected: false},
      {key: '4', name: 'Fibers', selected: false},
      {key: '5', name: 'Motors', selected: false},
      {key: '6', name: 'Machinery', selected: false},
      {key: '7', name: 'Packaging', selected: false},
      {key: '8', name: 'Other', selected: false},
    ],
  },
  {
    category: 'Service Provider',
    key: '9bb',
    options: [
      {key: '1', name: 'Financing', selected: false},
      {key: '2', name: 'Warranty', selected: false},
      {key: '3', name: 'Publications', selected: false},
      {key: '4', name: 'Training', selected: false},
      {key: '5', name: 'Marketing', selected: false},
      {key: '6', name: 'Recruiting', selected: false},
      {key: '7', name: 'Other', selected: false},
    ],
  },
  {
    category: 'Other',
    key: '09hhgto',
    options: [{key: '1', name: 'Other', selected: false}],
  },
];

export const subscriptionData = [
  {
    key: '1',
    desc: 'Ability to edit appearance, company details, and posts within the directory.',
    icon: images.tickCircle,
  },
  {
    key: '2',
    desc: 'Ability to invite others to attend events.',
    icon: images.tickCircle,
  },
  {
    key: '3',
    desc: 'Have the option to showcase the number of years they have been in the industry.',
    icon: images.tickCircle,
  },
  {
    key: '4',
    desc: 'Can highlight their professional achievements on their profiles.',
    icon: images.tickCircle,
  },
  {
    key: '5',
    desc: 'Can choose to display their email and phone number on their profile for enhanced networking opportunities.',
    icon: images.tickCircle,
  },
  {
    key: '6',
    desc: 'Can list any relevant certifications they have earned in the industry',
    icon: images.tickCircle,
  },
  {
    key: '7',
    desc: 'Unlimited messages per month',
    icon: images.tickCircle,
  },
];

export const sideMenuData = [
  {
    key: '1',
    name: 'Events',
    icon: images.calendar,
    route: Routes.CALENDEREVENTS,
  },
  {
    key: '2',
    name: 'Settings',
    icon: images.setting,
    route: Routes.SETTINGS,
  },
  {
    key: '3',
    name: 'Help Center',
    icon: images.helpCenter,
    route: Routes.HELPCENTER,
  },
  {
    key: '4',
    name: 'Share',
    icon: images.shareLink,
    route: '',
  },
];

export const filterData = [
  {
    key: '0',
    name: 'Filter:',
  },
  {
    key: '1oo',
    name: 'Events',
  },
  {
    key: '2g',
    name: 'Furniture',
  },
  {
    key: '3l',
    name: 'Retailers',
  },
  {
    key: '4l',
    name: 'Manufacturers',
  },
  {
    key: '5k',
    name: 'Suppliers',
  },
];
export const employesFilterData = [
  {
    key: '0',
    name: 'Filter:',
  },
  {
    key: 'q3fd30',
    name: 'Users',
  },
  {
    key: '1oo',
    name: 'Companies',
  },
  {
    key: '2g',
    name: 'Events',
  },
  {
    key: '3l',
    name: 'Products',
  },
  {
    key: '4l',
    name: 'Services',
  },
  {
    key: '5k',
    name: 'Groups',
  },
  {
    key: '23x',
    name: 'Memberships',
  },
];

export const postsData = [
  {
    postType: 'CompanyPosts',
    postData: {
      postType: 'CompanyPosts',
      profileLink: images.companyLogo,
      key: '1A',
      companyName: 'Tx-Dynamics',
      uploadDateTime: '1733564073000', // Time in milliseconds
      followers: '6,543',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        {img: images.postImage2, id: 2},
        {img: images.postImage3, id: 3},
        {img: images.postImage4, id: 4},
        {img: images.postImage5, id: 5},
      ], // Assuming this will contain images or media related to the post
      documentLink: '',
    },
  },
  {
    postType: 'CompanyPosts',
    postData: {
      postType: 'CompanyPosts',
      profileLink: images.companyLogo,
      key: '11A',
      companyName: 'WaTx-Solution',
      uploadDateTime: '1733564073000', // Time in milliseconds
      followers: '6,543',
      description:
        'not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      albumCollection: [], // Assuming this will contain images or media related to the post
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
  {
    postType: 'UserPosts',
    postData: {
      postType: 'UserPosts',
      profileLink: images.profile1,
      key: '2A',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [{img: images.postImage1, id: 1}],
      designation: 'Manufacturer',
      documentLink: '',
    },
  },
  {
    postType: 'UserPosts',
    postData: {
      postType: 'UserPosts',
      profileLink: images.profile1,
      key: '21A',
      userName: 'Rosser Jias',
      uploadDateTime: '1733564073000',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th.",
      albumCollection: [],
      designation: 'Manufacturer',
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
  {
    postType: 'UserEventPost',
    postData: {
      postType: 'UserEventPost',
      profileLink: images.profile3,
      key: '3iA',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      followers: '6,543',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        {img: images.postImage2, id: 2},
        {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      designation: 'Manufacturer',
      eventTitle: 'Etiam senectus neque molestie...',
      peopleAttending: '372',
      organizer: 'Tx Dynamics',
      eventDateTime: '1733564073000',
      eventCoverPhoto: images.eventPhoto,
    },
  },
  {
    postType: 'CompanyPosts',
    postData: {
      postType: 'CompanyPosts',
      profileLink: images.companyLogo,
      key: '4Aa',
      companyName: 'Tija Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        {img: images.postImage2, id: 2},
        {img: images.postImage3, id: 3},
        {img: images.postImage4, id: 4},
        {img: images.postImage5, id: 5},
        {
          video:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          id: 6,
        },
        {
          video:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          id: 7,
        },
      ],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [],
      documentLink: '',
    },
  },
  {
    postType: 'UserPollPost',
    postData: {
      postType: 'UserPollPost',
      profileLink: images.profile3,
      key: '5sA',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      description: 'Lorem Ipsum...',
      albumCollection: [],
      pollHeading: "What's your field of working",
      pollSubheading: 'The creator can see how you vote',
      pollData: [
        {id: 1, option: 'Sales Manager', totalVote: 10},
        {id: 2, option: 'Manufacturer', totalVote: 20},
        {id: 3, option: 'Retailer', totalVote: 5},
        {id: 4, option: 'Shop Owner', totalVote: 90},
      ],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'ArticlePost',
    postData: {
      postType: 'ArticlePost',
      profileLink: images.profile3,
      key: '6Ao',
      userName: 'Laila Rosso',
      uploadDateTime: '1733564072000',
      designation: 'CEO & Founder',
      articleTitle: 'React Native Devs life in Tx Dynmamis',
      articleTags: [
        'Tx',
        'Dynamics',
        'Workload',
        'Summer Days',
        'Worklad',
        'Summers',
        'Workd',
        'Summer Day',
      ],
      articleDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        // {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'CelebrationPost',
    postData: {
      postType: 'CelebrationPost',
      profileLink: images.profile1,
      key: '7jA',
      companyName: 'Gilila Jine',
      uploadDateTime: '1733564071000',
      designation: 'Developer',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      postType: 'CompanySponsoredPost',
      profileLink: images.companyLogo,
      key: '9A',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [
        {
          id: 1,
          comapnyServicName: 'Interrior Design',
          comapnyServiceDescription:
            'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
          img: images.services1,
        },
        {
          id: 2,
          comapnyServicName: 'Extrior Design',
          comapnyServiceDescription:
            'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
          img: images.services2,
        },
        {
          id: 3,
          comapnyServicName: 'Extrior Design',
          comapnyServiceDescription:
            'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
          img: images.services3,
        },
        {
          id: 4,
          comapnyServicName: 'Extrior Design',
          comapnyServiceDescription:
            'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
          img: images.services4,
        },
      ],
      documentLink: '',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      postType: 'CompanySponsoredPost',
      profileLink: images.companyLogo,
      key: '10A',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [
        {
          id: 1,
          companyProductName: 'Green Sofa',
          img: images.postImage1,
        },
        {
          id: 2,
          companyProductName: 'White Sofa',
          img: images.postImage2,
        },
        {
          id: 3,
          companyProductName: 'Yellow Sofa',
          img: images.postImage3,
        },
      ],
      companyServices: [],
      documentLink: '',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      postType: 'CompanySponsoredPost',
      profileLink: images.companyLogo,
      key: '12A',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [
        {
          id: 1,
          comapnyServicName: 'Interrior Design',
          comapnyServiceDescription:
            'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
          img: images.services1,
        },
      ],
      documentLink: '',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      postType: 'CompanySponsoredPost',
      profileLink: images.companyLogo,
      key: '14jA',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [],
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
];

export const companyBottomModalData = [
  {
    key: '1a',
    name: "Don't recommend",
    icon: images.block,
    route: '',
    onPress: {},
  },
  {
    key: '2a',
    name: 'Follow',
    icon: images.Follow,
    route: '',
    onPress: {},
  },
  {
    key: '6a',
    name: 'Save',
    icon: images.saveFilled,
    route: '',
    onPress: {},
  },
  {
    key: '78a',
    name: 'Send profile via message',
    icon: images.sendSave,
    route: '',
    onPress: {},
  },
  {
    key: '13a',
    name: 'Share',
    icon: images.share,
    route: '',
    onPress: {},
  },
  {
    key: '3aa',
    name: 'Report',
    icon: images.report,
    route: '',
    onPress: {},
  },
];
export const companySponsoredBottomModalData = [
  {
    key: '1a',
    name: 'Share',
    icon: images.share,
  },
  {
    key: '2a',
    name: 'Report Ad',
    icon: images.report,
  },
  {
    key: '3a',
    name: 'Hide ad',
    icon: images.hideAd,
  },
];

export const userBottomModalDataFor = [
  {
    key: '1a',
    name: 'Connect',
    icon: images.userAdd,
  },
  {
    key: '2a',
    name: 'Connect with message',
    icon: images.messageAdd,
  },
  {
    key: '5a',
    name: 'Save',
    icon: images.sendSave,
  },
  {
    key: '31a',
    name: "Don't recommend",
    icon: images.block,
  },
  {
    key: 's3a',
    name: 'Share profile',
    icon: images.share,
  },
  {
    key: '3aa',
    name: 'Report',
    icon: images.report,
  },
];

export const userBottomModalDataForConnections = [
  {
    key: '1a',
    name: 'Connect',
    icon: images.userAdd,
  },
  {
    key: '2a',
    name: 'Connect with message',
    icon: images.messageAdd,
  },
  {
    key: '5a',
    name: 'Save',
    icon: images.saveFilled,
  },
  {
    key: '4rw63w',
    name: 'Send profile via message',
    icon: images.sendSave,
  },
  {
    key: '31a',
    name: "Don't recommend",
    icon: images.block,
  },
  {
    key: 's3a',
    name: 'Share profile',
    icon: images.share,
  },
  {
    key: '3aa',
    name: 'Report',
    icon: images.report,
  },
];
export const userBottomModalDataToRemoveConnections = [
  {
    key: '1a',
    name: 'Remove connection',
    icon: images.userRemove,
  },
  {
    key: '4rw63w',
    name: 'Send profile via message',
    icon: images.sendSave,
  },
  {
    key: '5a',
    name: 'Save',
    icon: images.saveFilled,
  },
  {
    key: 's3a',
    name: 'Share profile',
    icon: images.share,
  },
  {
    key: '3aa',
    name: 'Report',
    icon: images.report,
  },
  {
    key: '34wecw',
    name: 'Block',
    icon: images.block,
  },
];

export const dummyPagePost = [
  {
    key: '23ea',
    image: images.postImage1,
    description: 'Ornare consequat in praesent risus rhon...',
    reactionsCount: 358,
  },
  {
    key: '34fe',
    image: images.postImage2,
    description: 'Ornare consequat in praesent risus rhon...',
    reactionsCount: 358,
  },
  {
    key: '87asfa',
    image: images.postImage3,
    description: 'Ornare consequat in praesent risus rhon...',
    reactionsCount: 358,
  },
  {
    key: '09gh',
    image: images.postImage5,
    description: 'Ornare consequat in praesent risus rhon...',
    reactionsCount: 358,
  },
];

export const dummyImages = [
  {
    key: '12a',
    image: images.profile1,
  },
  {
    key: 'a123',
    image: images.profile2,
  },
  {
    key: '421q',
    image: images.profile3,
  },
  {
    key: '642y',
    image: images.profile4,
  },
];

export const reactionsList = [
  {
    key: '12a',
    image: images.likeFilled,
  },
  {
    key: 'a123',
    image: images.love,
  },
  {
    key: '421q',
    image: images.insight,
  },
  {
    key: '642y',
    image: images.funny,
  },
  {
    key: '98y98g',
    image: images.celebrate,
  },
];

export const professionalRecommendatiaonlist = [
  {
    key: '12a',
    image: images.postImage1,
    profiePic: images.profile1,
    name: 'Sara Khalis',
    furnitureName: 'single-sofa-seat',
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: 'wer1',
    image: images.postImage3,
    profiePic: images.profile2,
    name: 'Jelooan Aaa',
    furnitureName: 'single-sofa-seat',
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: '9879',
    image: images.postImage2,
    profiePic: images.profile5,
    name: 'Ioad aa',
    furnitureName: 'Deluxe Sofa',
    description: 'Deluxe sofa set from Deluxe sofa set from...',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'SaraKhalis',
        furnitureName: 'Deluxe Sofa',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: 'luiy',
    image: images.postImage5,
    profiePic: images.profile4,
    name: 'UUaa kla',
    furnitureName: 'single-sofa-seat',
    description: 'I recently bought Deluxe sofa set from...',
    furnitureName: 'single-sofa-seat',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'Innerspring Mattress',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Tholmpso',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: '98yh',
    image: images.postImage5,
    profiePic: images.profile4,
    furnitureName: 'single-sofa-seat',
    name: 'UUaa kla',
    description: 'I recently bought Deluxe sofa set from...',
    furnitureName: 'single-sofa-seat',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: 'kh765',
    image: images.postImage5,
    profiePic: images.profile4,
    furnitureName: 'single-sofa-seat',
    name: 'UUaa kla',
    description: 'I recently bought Deluxe sofa set from...',
    furnitureName: 'single-sofa-seat',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: '3456hj',
    image: images.postImage5,
    profiePic: images.profile4,
    furnitureName: 'single-sofa-seat',
    name: 'UUaa kla',
    description: 'I recently bought Deluxe sofa set from...',
    furnitureName: 'single-sofa-seat',
    reviewList: [
      {
        key: '8979ub',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        image: images.postImage1,
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
  {
    key: '87bhb',
    image: images.postImage5,
    profiePic: images.profile4,
    furnitureName: 'single-sofa-seat',
    name: 'UUaa kla',
    description: 'I recently bought Deluxe sofa set from...',
    furnitureName: 'single-sofa-seat',
    reviewList: [
      {
        key: '8979ub',
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 3,
        reviewDateTime: '2 days ago',
      },
      {
        key: 'wer211',
        profiePic: images.profile2,
        name: 'Sara Khalis',
        furnitureName: 'single-sofa-seat',
        description:
          'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
        starsCount: 4,
        reviewDateTime: '2 days ago',
      },
    ],
  },
];

export const ProductImagesList = [
  {
    key: '12a',
    image: images.postImage1,
  },
  {
    key: 'wer1',
    image: images.postImage5,
  },
  {
    key: '9879',
    image: images.postImage2,
  },
  {
    key: 'luiy',
    image: images.postImage3,
  },
];
export const serviecslist = [
  {
    key: '12a',
    image: images.services1,
    profiePic: images.profile1,
    name: 'Sara Khalis',
    title: 'Interior Design Consultation',
    starCount: 4,
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from... I recently purchased the Deluxe sofa set from Deluxe sofa set from',
    reviewList: [
      {
        key: '8979ub',
        profiePic: images.profile2,
        name: 'Sara Khalis',
        starsCount: 3,
        reviewDateTime: '3 days ago',
      },
      {
        key: 'wer211',
        profiePic: images.profile2,
        name: 'Sara Thompson',
        starsCount: 4,
        reviewDateTime: '1 day ago',
      },
    ],
  },
  {
    key: 'wer1',
    image: images.services2,
    profiePic: images.profile1,
    name: 'Jelooan Aaa',
    title: 'Customization and Personalization',
    starCount: 2,
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from... I recently purchased the Deluxe sofa set from Deluxe sofa set from',
    reviewList: [
      {
        key: '8979ub',
        profiePic: images.profile2,
        name: 'Jack Quilies',
        starsCount: 1,
        reviewDateTime: '3 days ago',
      },
      {
        key: 'wer211',
        profiePic: images.profile2,
        name: 'Sara Thompson',
        starsCount: 4,
        reviewDateTime: '1 day ago',
      },
    ],
  },
  {
    key: '9879',
    image: images.services3,
    profiePic: images.profile1,
    name: 'Ioad aa',
    title: 'Interior Design Consultation',
    starCount: 4,
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from... I recently purchased the Deluxe sofa set from Deluxe sofa set from',
    reviewList: [
      {
        key: '8979ub',
        profiePic: images.profile2,
        name: 'Sara Khalis',
        starsCount: 3,
        reviewDateTime: '3 days ago',
      },
      {
        key: 'wer211',
        profiePic: images.profile2,
        name: 'Sara Thompson',
        starsCount: 5,
        reviewDateTime: '1 day ago',
      },
    ],
  },
  {
    key: 'luiy',
    image: images.services4,
    profiePic: images.profile1,
    name: 'UUaa kla',
    title: 'Customization and Personalization',
    starCount: 2,
    description:
      'I recently purchased the Deluxe sofa set from Deluxe sofa set from... I recently purchased the Deluxe sofa set from Deluxe sofa set from',
    reviewList: [
      {
        key: '8979ub',
        profiePic: images.profile2,
        name: 'Sara Khalis',
        starsCount: 3,
        reviewDateTime: '3 days ago',
      },
      {
        key: 'wer211',
        profiePic: images.profile2,
        name: 'Sara Thompson',
        starsCount: 5,
        reviewDateTime: '1 day ago',
      },
    ],
  },
];
export const followedCompaniList = [
  {
    key: '12a',
    comapnyImage: images.profile5,
    name: '[Company-name]',
    followers: '1,231',
  },
  {
    key: 'r232a',
    comapnyImage: images.profile5,
    name: '[Company-name]',
    followers: '91,231',
  },
  {
    key: '3312a',
    comapnyImage: images.profile5,
    name: '[Company-name]',
    followers: '7,231',
  },
  {
    key: '1re2a',
    comapnyImage: images.profile5,
    name: '[Company-name]',
    followers: '6,131',
  },
];

export const companyProfileData = [
  {
    postType: 'CompanyPost',
    postData: {
      profileLink: images.companyLogo,
      key: '1A',
      companyName: 'Tx-Dynamics',
      uploadDateTime: '1733564073000', // Time in milliseconds
      followers: '6,543',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        {img: images.postImage2, id: 2},
        {img: images.postImage3, id: 3},
        {img: images.postImage4, id: 4},
        {img: images.postImage5, id: 5},
      ], // Assuming this will contain images or media related to the post
      documentLink: '',
    },
  },
  {
    postType: 'CompanyPost',
    postData: {
      profileLink: images.companyLogo,
      key: '09A',
      companyName: 'WaTx-Solution',
      uploadDateTime: '1733564073000', // Time in milliseconds
      followers: '6,543',
      description:
        'not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      albumCollection: [], // Assuming this will contain images or media related to the post
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      profileLink: images.companyLogo,
      key: '4Aa',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        // {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
        // {
        //   video:
        //     'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        //   id: 6,
        // },
        // {
        //   video:
        //     'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        //   id: 7,
        // },
      ],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [],
      documentLink: '',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      profileLink: images.companyLogo,
      key: '14jA',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [],
      companyServices: [],
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
  {
    postType: 'CompanySponsoredPost',
    postData: {
      profileLink: images.companyLogo,
      key: '10A',
      companyName: 'NoNam Rosser',
      uploadDateTime: '1733564073000',
      followers: '2,332',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
      companyProducts: [
        {
          id: 1,
          companyProductName: 'Green Sofa',
          img: images.postImage1,
        },
        {
          id: 2,
          companyProductName: 'White Sofa',
          img: images.postImage2,
        },
        {
          id: 3,
          companyProductName: 'Yellow Sofa',
          img: images.postImage3,
        },
      ],
      companyServices: [],
      documentLink: '',
    },
  },
  {
    postType: 'ArticlePost',
    postData: {
      profileLink: images.profile3,
      key: '6Ao',
      userName: 'Laila Rosso',
      uploadDateTime: '1733564072000',
      designation: 'CEO & Founder',
      articleTitle: 'React Native Devs life in Tx Dynmamis',
      articleTags: [
        'Tx',
        'Dynamics',
        'Workload',
        'Summer Days',
        'Worklad',
        'Summers',
        'Workd',
        'Summer Day',
      ],
      articleDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'CelebrationPost',
    postData: {
      profileLink: images.profile1,
      key: '7jA',
      companyName: 'Gilila Jine',
      uploadDateTime: '1733564071000',
      designation: 'Developer',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
];
export const userProfileData = [
  {
    postType: 'UserPost',
    postData: {
      profileLink: images.profile1,
      key: '2A',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [{img: images.postImage1, id: 1}],
      designation: 'Manufacturer',
      documentLink: '',
    },
  },
  {
    postType: 'UserPost',
    postData: {
      profileLink: images.profile1,
      key: '21A',
      userName: 'Rosser Jias',
      uploadDateTime: '1733564073000',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th.",
      albumCollection: [],
      designation: 'Manufacturer',
      documentLink: 'https://icseindia.org/document/sample.pdf',
    },
  },
  {
    postType: 'UserEventPost',
    postData: {
      profileLink: images.profile3,
      key: '3iA',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      followers: '6,543',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        {img: images.postImage2, id: 2},
        {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      designation: 'Manufacturer',
      eventTitle: 'Etiam senectus neque molestie...',
      peopleAttending: '372',
      organizer: 'Tx Dynamics',
      eventDateTime: '1733564073000',
      eventCoverPhoto: images.eventPhoto,
    },
  },
  {
    postType: 'CelebrationPost',
    postData: {
      profileLink: images.profile1,
      key: '7jA',
      companyName: 'Gilila Jine',
      uploadDateTime: '1733564071000',
      designation: 'Developer',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'UserPollPost',
    postData: {
      profileLink: images.profile3,
      key: '5sA',
      userName: 'Jocelyn Rosser',
      uploadDateTime: '1733564073000',
      description: 'Lorem Ipsum...',
      albumCollection: [],
      pollHeading: "What's your field of working",
      pollSubheading: 'The creator can see how you vote',
      pollData: [
        {id: 1, option: 'Sales Manager', totalVote: 10},
        {id: 2, option: 'Manufacturer', totalVote: 20},
        {id: 3, option: 'Retailer', totalVote: 5},
        {id: 4, option: 'Shop Owner', totalVote: 90},
      ],
      sponsored: true,
      websiteLink: '',
      companyProductRoute: '',
    },
  },
  {
    postType: 'ArticlePost',
    postData: {
      profileLink: images.profile3,
      key: '6Ao',
      userName: 'Laila Rosso',
      uploadDateTime: '1733564072000',
      designation: 'CEO & Founder',
      articleTitle: 'React Native Devs life in Tx Dynmamis',
      articleTags: [
        'Tx',
        'Dynamics',
        'Workload',
        'Summer Days',
        'Worklad',
        'Summers',
        'Workd',
        'Summer Day',
      ],
      articleDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      albumCollection: [
        // {img: images.postImage1, id: 1},
        // {img: images.postImage2, id: 2},
        // {img: images.postImage3, id: 3},
        // {img: images.postImage4, id: 4},
        // {img: images.postImage5, id: 5},
      ],
      websiteLink: '',
      companyProductRoute: '',
    },
  },
];

export const commentSectionData = [
  {
    key: '7jA',
    name: 'Gilla Jine',
    profileLink: images.profile1,
    messagedDateTime: '1733564073000',
    message: 'Great post! Really enjoyed reading it.',
  },
  {
    key: '7jA',
    name: 'Gilla Jine',
    profileLink: images.profile1,
    messagedDateTime: '1733564073000',
    message: 'Great post! Really enjoyed reading it.',
  },
  {
    key: '7jA',
    name: 'Gilla Jine',
    profileLink: images.profile1,
    messagedDateTime: '1733564073000',
    message: 'Great post! Really enjoyed reading it.',
  },
  {
    key: '7jA',
    name: 'Gilla Jine',
    profileLink: images.profile1,
    messagedDateTime: '1733564073000',
    message: 'Great post! Really enjoyed reading it.',
  },
];

export const eventsData = [
  {
    eventTapData: {
      eventDateTime: '1715484158000',
    },

    eventData: [
      {
        profileLink: images.profile3,
        key: '1234rcvgbh',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',
        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
      {
        profileLink: images.profile3,
        key: '08vvv',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',

        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
      {
        profileLink: images.profile3,
        key: '234GFD',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',
        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
      {
        profileLink: images.profile3,
        key: '8uadsfb97',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',

        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
    ],
  },
  {
    eventTapData: {
      eventDateTime: '1715570558000',
    },
    eventData: [
      {
        profileLink: images.profile3,
        key: '234GFD',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',
        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
      {
        profileLink: images.profile3,
        key: '234GFD',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',

        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: ['Hotel', 'Plane', 'Vehicle'],
      },
    ],
  },
  {
    eventTapData: {
      eventDateTime: '1715743358000',
    },
    eventData: [
      {
        profileLink: images.profile3,
        key: '234GFD',
        userName: 'Jocelyn Rosser',
        uploadDateTime: '1733564073000',
        followers: '6,543',
        eventTime: '05:30pm',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        albumCollection: [{img: images.postImage1, id: 1}],
        designation: 'Manufacturer',
        peopleAttending: '372',
        eventTitle:
          'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra',
        organizer: 'Tx Dynamics',
        organizerProfile: images.companyLogo,
        eventCoverPhoto: images.eventPhoto,
        eventLocation: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
        travelResources: [
          'Hotel',
          'Plane',
          'Vehicle',
          'Hotel',
          'Plane',
          'Vehicle',
          'Hotel',
          'Plane',
          'Vehicle',
          'Hotel',
          'Plane',
          'Vehicle',
        ],
      },
    ],
  },
];

export const attendeePeopleList = [
  {
    key: 'JocelynRosser',
    name: 'Jocelyn Rosser',
    profileImage: images.employee1,
  },
  {
    key: 'BonnieBarstow ',
    name: 'GustavoWestervelt',
    profileImage: images.employee3,
  },
  {
    key: 'GustavoWestervelt',
    name: 'Dr. Bonnie Barstow ',
    profileImage: images.employee2,
  },
  {
    key: 'Westervelt',
    name: 'Westervelt',
    profileImage: images.employee3,
  },
  {
    key: 'Murdock',
    name: 'Murdock',
    profileImage: images.employee2,
  },
  {
    key: 'TheodoreCalvin',
    name: 'Theodore T.C. Calvin',
    profileImage: images.employee1,
  },
];

export const notificationsData = [
  {
    key: '1234sa',
    message: 'Commodo condimentum a proin eu. Suspendisse sapien ullamcorper.',
    dateTime: '2 days ago',
    status: true,
  },
  {
    key: 'iyb99b',
    message:
      'At odio ut integer egestas. Aliquet in mattis volutpat at faucibus nisi a.',
    dateTime: '3 days ago',
    status: false,
  },
  {
    key: 'iuybn',
    message:
      'Placerat tempus etiam urna sed viverra. Ac nibh nunc odio eu mi sit.',
    dateTime: '2 days ago',
    status: false,
  },
  {
    key: '8y7h',
    message:
      'Nibh tristique adipiscing vel tellus in netus neque nisl. Tempus natoque.',
    dateTime: '1 day ago',
    status: true,
  },
];

export const groupsMemberShipData = [
  {
    key: '12d',
    name: 'Golf Club',
    location: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
    image: images.groupImage1,
    year: '2017',
  },
  {
    key: 'wrfsw3',
    name: 'Science Club',
    location: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
    image: images.groupImage2,
    year: '2020',
  },
  {
    key: '7b76n',
    name: 'Literature Society',
    location: 'https://maps.app.goo.gl/pA87gaNzsnkdBU3z7',
    image: images.groupImage2,
    year: '2020',
  },
];

export const experienceData = [
  {
    id: 1,
    title: '[position here]',
    dateTime: 'Present',
    institueName: 'company-',
    description:
      'specialization in [name-re], [name-here], [name-here], and [name-here].',
    location: 'Washington, America',
    spendsYear: 'Oct 2021 - Sep 2022',
  },
  {
    id: 2,
    title: '[position here]',
    dateTime: 'Present',
    institueName: 'company-',
    description:
      'specialization in [namere], [name-here], [name-here], and [name-here].',
    location: 'Washington, America',
    spendsYear: 'Oct 2020 - Sep 2021',
  },
];

export const certificationsData = [
  {
    id: 1,
    title: '[Certification-name-here]',
    dateTime: '. Oct 2021',
    institueName: '[institute-name]',
    description:
      'specialization in [name-re], [name-here], [name-here], and [name-here].',
  },
  {
    id: 2,
    title: '[Certification-name-here]',
    dateTime: '. Oct 2021',
    institueName: '[institute-name]',
    description:
      'specialization in [name-re], [name-here], [name-here], and [name-here].',
  },
];

export const companyCardsData = [
  {
    key: '34ds',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage3,
    followers: '1,2434,',
  },
  {
    key: '34tgvae',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage1,
    followers: '1,999',
  },
  {
    key: 'aw5wz',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage2,
    followers: '123',
  },
  {
    key: 'ac4w',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage7,
    followers: '3,242',
  },
  {
    key: 'a4wre',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage5,
    followers: 4,
  },
  {
    key: '23r4c',
    name: '[Company Name]',
    profileImage: images.companyLogo,
    coverImage: images.postImage3,
    followers: '1,2434',
  },
];

export const addPostData = [
  {
    key: '123a3',
    name: 'Media',
    icon: images.camera,
    routeName: Routes.MEDIAPOSTSCREEN,
  },
  {
    key: 'q873492',
    name: 'Poll',
    icon: images.pollIcon,
    routeName: Routes.POLLPOSTSCREEN,
  },
  {
    key: '87v9v',
    name: 'Event',
    icon: images.eventCalenderIcon,
    routeName: Routes.EVENTPOSTSCREEN,
  },
  {
    key: '123wqaa',
    name: 'Document',
    icon: images.documentIcon,
    routeName: Routes.DOCUMENTPOSTSCREEN,
  },
  {
    key: '09aaq',
    name: 'Products',
    icon: images.productIcon,
    routeName: Routes.PRODUCTPOSTSCREEN,
  },
  {
    key: 'nnn766',
    name: 'Services',
    icon: images.servicesIcon,
    routeName: Routes.SERVICESPOSTSCREEN,
  },
  {
    key: '098bb',
    name: 'Celebration',
    icon: images.medal,
    routeName: Routes.CELEBRATIONPOSTSCREEN,
  },
  {
    key: 'tdre1',
    name: 'RFP',
    icon: images.documentIcon,
    routeName: Routes.RFPPOSTSCREEN,
  },
  {
    key: '987f89g',
    name: 'Articles',
    icon: images.articleIcon,
    routeName: Routes.ARTICLEPOSTSCREEN,
  },
];

export const ProductsSelectionData = [
  {
    key: 'w3q4qx',
    productName: 'Single-Seat Sofa',
    uri: images.postImage1,
  },
  {
    key: '987vv',
    productName: 'Deluxe Sofa',
    uri: images.postImage2,
  },
  {
    key: 'wurecq34',
    productName: 'Innerspring Mattress',
    uri: images.postImage3,
  },
  {
    key: '2346rx',
    productName: 'Green Comfort Sofa',
    uri: images.postImage4,
  },
  {
    key: '98vc',
    productName: 'Memory Foam Mattress',
    uri: images.postImage5,
  },
  {
    key: '098v',
    productName: 'Ring Swing',
    uri: images.postImage6,
  },
  {
    key: 'nu6cvy',
    productName: 'Deluxe Sofa',
    uri: images.postImage7,
  },
];

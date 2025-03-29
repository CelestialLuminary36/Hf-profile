/**
 * Configure your projects in this file
 */

export const projects = [
  {
    slug: "snowflow",
    projectName: "SnowFlow",
    projectDescription: "高并发场景下的云原生架构实践项目",
    imagePath: "/projects/SnowFlow.png",
    projectLink: "https://example1.com",
    githubLink: "https://example1.com",
    technologies: [
      {
        name: "Golang + Hertz + PostgreSQL",
        pros: ["高并发处理能力", "极致性能优化", "微服务友好架构"],
        cons: ["生态成熟度较Java低", "泛型支持较新"],
        adoptionReason:
          "探索CloudWeGo生态在高并发场景下的实践，验证Golang在实时交互系统的性能边界",
      },
      {
        name: "React + TypeScript",
        pros: ["类型安全开发", "组件化架构", "丰富的生态系统"],
        cons: ["打包体积优化挑战", "学习曲线较陡"],
        adoptionReason: "构建现代化交互界面，实践前端工程化最佳方案",
      },
    ],
    features: [
      { title: "实时动态流", progress: 95, icon: "🌊" },
      { title: "即时互动", progress: 88, icon: "⚡" },
      { title: "智能推荐", progress: 75, icon: "🧠" },
      { title: "多端同步", progress: 68, icon: "📱" },
    ],
    explanation:
      "作为Java开发者，选择Golang探索高并发场景的实现边界，结合React构建现代化交互界面，在CloudWeGo生态中验证微服务架构的实践方案",
  },
  {
    slug: "artnecthub",
    projectName: "ArtnectHub",
    projectDescription: "移动优先的AI艺术创作社交实验平台",
    imagePath: "/projects/ArtnectHub.png",
    projectLink: "https://example2.com",
    githubLink: "https://example2.com",
    technologies: [
      {
        name: "SpringCloud + Nacos",
        pros: [
          "实现配置中心动态刷新",
          "集成Sentinel流量控制",
          "完成服务网格化改造",
        ],
        cons: ["本地开发资源占用较高", "分布式事务调试复杂度"],
        adoptionReason: [
          "技术验证：对比Dubbo生态差异",
          "学习目标：全链路监控实现",
        ].join(" | "),
      },
      {
        name: "LangChain + OpenAI",
        pros: [
          "构建三级提示词优化管道",
          "实现异步任务队列",
          "完成生成结果安全过滤",
        ],
        cons: ["API响应延迟不稳定", "提示词注入风险管控"],
        adoptionReason: [
          "技术探索：LLM工程化集成模式",
          "创新实践：中文->优化英文prompt转换器",
        ].join(" | "),
      },
      {
        name: "MongoDB分片集群",
        pros: [
          "设计作品文档存储结构",
          "实现地理空间索引查询",
          "完成分片策略验证",
        ],
        cons: ["事务支持局限性", "内存消耗优化空间"],
        adoptionReason: [
          "技术验证：对比Cassandra存储方案",
          "学习目标：掌握分片集群部署",
        ].join(" | "),
      },
    ],
    features: [
        {
          title: "智能创作引擎",
          progress: 90,
          icon: "🤖",
          detail: [
            "实现中文自然语言解析",
            "构建三级prompt优化管道（语义增强→风格修饰→安全过滤）",
            "集成Stable Diffusion生成模型"
          ].join(' | ')
        },
        {
          title: "移动端体验优化",
          progress: 85,
          icon: "📱",
          detail: [
            "仿淘宝瀑布流布局",
            "虚拟滚动支持万级作品渲染",
            "WebP格式图片懒加载"
          ].join(' | ')
        },
        {
          title: "社交互动体系",
          progress: 78,
          icon: "💬",
          detail: [
            "实时点赞/收藏状态同步",
            "基于用户行为的推荐算法原型",
            "作品传播链路追踪"
          ].join(' | ')
        },
        {
          title: "异步任务系统",
          progress: 82,
          icon: "⚙️",
          detail: [
            "RabbitMQ实现生成任务队列",
            "失败任务自动重试机制",
            "进度状态WebSocket推送"
          ].join(' | ')
        }
      ],
      explanation: [
        "采用SpringCloud构建稳健的微服务底座，",
        "通过LangChain实现自然语言到AI指令的工程化转换，验证非结构化数据场景下",
        "MongoDB分片集群的存储方案。项目重点攻克移动端高密度内容渲染性能瓶颈，",
        "并建立从创意输入到社交传播的完整数字创作链路。",
      ].join('')
  },
];

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6216a7617cd7bc477cf1cc4a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g7x85csi',
                  apiId: 'f31ca2ad-325b-4653-a0c8-5dd849d88bc6'
                },
                {
                  buildHookId: '6216a7616f0412456adcb4ac',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zxod3vey',
                  apiId: 'b49de6bd-b6a8-4052-a5cb-27f38671e239'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/serenhipity888/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zxod3vey.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

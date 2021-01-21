export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6009392cc727d3878639392c',
                  title: 'Sanity Studio',
                  name: 'investingdumdums-studio',
                  apiId: 'c8bedb91-da2b-46f3-8611-91583d3601b3'
                },
                {
                  buildHookId: '6009392cba060d8ef49092d1',
                  title: 'Blog Website',
                  name: 'investingdumdums',
                  apiId: '108aa177-75de-44c9-810e-1b230778ceab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanjansen/investingdumdums',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://investingdumdums.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

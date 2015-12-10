angular.module('app')
.service('messagesService', [
  '$q',
  messagesService
  ]);

function messagesService($q){
  var messages = {
    'news': [
      {
        logo: 'http://www.cae-store.com/wp-content/themes/cae/library/images/cae-logo.jpg',
        subject: 'Collection Printemps-Ete',
        userName: 'Cae',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
      {
        logo: '',
        subject: 'Votre propre shop bientôt sur votre blog',
        userName: 'Justin BRISSET',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
    ],
    'new_brands': [
      {
        logo: 'http://www.cae-store.com/wp-content/themes/cae/library/images/cae-logo.jpg',
        subject: 'Cae',
        userName: 'Justin BRISSET',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
      {
        logo: 'https://wooop.fr/img/logo.jpg',
        subject: 'wooop',
        userName: 'Justin BRISSET',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
      {
        logo: 'http://www.maisonlabiche.com/webroot/upload/images/MLB/logo3.jpg',
        subject: 'Maison Labiche',
        userName: 'Justin BRISSET',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
      {
        logo: 'http://balzac-paris.fr/wp-content/themes/regency/theme/assets/images/logo-dark.png',
        subject: 'Balzac Paris',
        userName: 'Justin BRISSET',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
    ],
    'new_products': [
      {
        logo: 'http://www.cae-store.com/wp-content/themes/cae/library/images/cae-logo.jpg',
        subject: 'Oxalis #1',
        userName: 'Cae',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
      {
        logo: 'https://wooop.fr/img/logo.jpg',
        subject: 'T-Shirt Dans le Pochon',
        userName: 'wooop',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida accumsan enim, sed lacinia ligula dignissim vitae. Sed at magna volutpat, pretium nunc non, tincidunt enim. Suspendisse quis iaculis tortor, sed lobortis metus. Aenean cras amet.'
      },
    ],
  };

  return {
    loadAllItems : function() {
      return $q.when(messages);
    }
  };
}
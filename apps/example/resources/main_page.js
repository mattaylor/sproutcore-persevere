// ==========================================================================
// Project:   Example - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Example */

// This page describes the main user interface for your application.  
Example.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'projectsView projectProductsView productsView'.w(),
    
    projectsView: SC.View.design({
      layout: {left:0, width: 350},
      childViews: 'labelView addButtonView projectListView'.w(),
    
      labelView: SC.LabelView.design({
        value: 'Projects',
        layout: {top: 10, height: 30, right: 80},
        textAlign: SC.ALIGN_CENTER,
      }),
    
      addButtonView: SC.ButtonView.design({
        layout: {top: 5, height: 40, width: 80, right: 0},
        title: 'add',
        target: 'Example.projectsController',
        action: 'addRecord'
      }),

      projectListView: SC.ListView.design({
        layout: {top: 40},
        contentValueKey: 'name',
        contentBinding: 'Example.projectsController.arrangedObjects',
        canEditContent: YES,
        selectionBinding: 'Example.projectsController.selection'      
      })      
    }),

    projectProductsView: SC.View.design({
      layout: {left:355, width: 250},
      childViews: 'labelView listView'.w(),
      
      labelView: SC.LabelView.design({
        projectBinding: SC.Binding.single('Example.projectsController.selection'),
        value: function(){
          return this.getPath('project.name') + " Products";
        }.property('project').cacheable(),
        
        layout: {top: 10, height: 30, right: 80},
        textAlign: SC.ALIGN_CENTER,
      }),
      
      listView: SC.ListView.design({
        projectBinding: SC.Binding.single('Example.projectsController.selection'),
        layout: {top: 40},
        contentValueKey: 'name',
        contentBinding: '*project.products'
        // contentValueKey: 'name',
        // contentBinding: 'Example.productsController.arrangedObjects',
        // canEditContent: YES,
        // selectionBinding: 'Example.productsController.selection'            
      })    
    }),
    
    productsView: SC.View.design({
      layout: {right:0, width: 350},
      childViews: 'labelView addButtonView productListView'.w(),
      
      labelView: SC.LabelView.design({
        value: 'Products',
        layout: {top: 10, height: 30, right: 80},
        textAlign: SC.ALIGN_CENTER,
      }),
    
      addButtonView: SC.ButtonView.design({
        layout: {top: 5, height: 40, width: 80, right: 0},
        title: 'add',
        target: 'Example.productsController',
        action: 'addRecord'
      }),

      productListView: SC.ListView.design({
        layout: {top: 40},
        contentValueKey: 'name',
        contentBinding: 'Example.productsController.arrangedObjects',
        canEditContent: YES,
        selectionBinding: 'Example.productsController.selection'            
      })    
    })
    
    
  })
});

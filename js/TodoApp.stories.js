import React, { useState, useRef } from 'react';
import TodoApp from './TodoApp';

export default {
  title: 'TodoApp',
  component: TodoApp,
};

export const App = args => (
  <div>
    {/* Add external Google Font */}
    <link 
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" 
      rel="stylesheet" 
    />
    
    {/* Add external CSS */}
    <link 
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" 
      rel="stylesheet" 
    />
    
    <div style={{
      fontFamily: '"Roboto", sans-serif',
      backgroundImage: 'url(https://picsum.photos/1200/600?random=todoapp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Semi-transparent overlay for better readability */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <TodoApp {...args}/>
      </div>
    </div>
  </div>
);

// match component name for single story hoisting
App.storyName = 'TodoApp';

App.args = {
  showTodos: 'all',
  todos: [
    { title: 'Foo', completed: true },
    { title: 'Bar', completed: true },
    { title: 'Baz' },
    { title: 'Qux' },
    { title: 'Xyzzy' }
  ]
};

App.parameters = {
  // take additional snapshots of various states
  percy: {
    additionalSnapshots: [{
      suffix: ' - Active',
      args: { showTodos: 'active' }
    },{
      suffix: ' - Completed',
      args: { showTodos: 'completed' }
    }, {
      suffix: ' - None',
      args: { todos: [] }
    }]
  }
};
/**
 * Populate the list of presentations
 * TODO: add links to events, files?
 */


const presentationData = [
    // {
    //     title: '',
    //     event: '',
    //     spacetime: '',
    //     type: '',
    //  },
    {
        title: 'Generating shapes using knowledge instead of data',
        event: 'PhD Seminar in Computer Science at JKU Linz',
        spacetime: '13 November 2023, Linz, Austria',
        type: 'Seminar presentation',
        // https://www.jku.at/en/institute-for-machine-learning/teaching/courses-and-seminars/ws-2023/phd-seminar-in-computer-science-3se-kopie-1/
    },
    {
        title: 'Polyhedral Complex Extraction from ReLU Networks using Edge Subdivision',
        event: 'GRAPES Learning Week II: Industrial skills and advanced topics in ML',
        spacetime: '6-10 September 2023, Barcelona, Spain',
        type: 'Seminar presentation',
    },
    {
        title: 'Polyhedral Complex Extraction from ReLU Networks using Edge Subdivision',
        event: 'Topology, Algebra, and Geometry in Machine Learning (TAG-ML) workshop @ ICML 2023',
        spacetime: '23-29 July 2023, Honololu, USA',
        type: 'Workshop poster',
    },
    {
        title: 'Polyhedral Complex Extraction from ReLU Networks using Edge Subdivision',
        event: 'The Fortieth International Conference on Machine Learning (ICML 2023)',
        spacetime: '23-29 July 2023, Honololu, USA',
        type: 'Conference poster',
    },
    {
        title: 'Neural Implicit Shape Editing using Boundary Sensitivity',
        event: 'Learning, Processing, and Optimising shapes minisymposium @ SIAM Conference on Computational Geometric Design',
        spacetime: '3-7 July 2023, Genoa, Italy',
        type: 'Minisymposium talk',
    },
    {
        title: 'Neural Implicit Shape Editing using Boundary Sensitivity',
        event: 'The Eleventh International Conference on Learning Representations (ICLR 2023)',
        spacetime: '1-5 May 2023, Rwanda, Kigali',
        type: 'Conference poster',
    },
    {
        title: 'Learning PDE solution spaces using Tchebycheffian B-splines',
        event: '10th International Conference on Isogeometric Analysis (IGA 2022)',
        spacetime: '6-9 November 2022, Banff, Canada',
        type: 'Conference presentation',
    },
    {
        title: 'Hierarchical Analytical Marching of Piecewise Linear Neural Networks',
        event: 'GRAPES Learning Week II',
        spacetime: '13-17 June 2022, Lugano, Switzerland',
        type: 'Seminar presentation',
    },
    {
        title: 'Exploring Challenges in Shape Analysis, Generation, and Optimization with Neural Networks',
        event: 'Geometric Modeling: Interoperability and New Challenges',
        spacetime: '21-26 November 2021, Dagstuhl, Germany',
        type: 'Seminar presentation',
    },
    {
        title: 'Geometric Modelling for Evolutionary Deep Learning',
        event: 'GRAPES Learning Week I: Academic skills and advanced topics in CAD',
        spacetime: '6-10 September 2021, Barcelona, Spain',
        type: 'Seminar presentation',
    },
    {
        title: 'Take a Seat: Reinforcement Learning for Social Distancing',
        event: 'Confer Conference 2021',
        spacetime: '6 June 2021, online',
        type: 'Conference presentation',
    },
    {
        title: 'Geometric Modelling and Evolutionary Deep Learning Architectures',
        event: 'Geilo Winter School 2021',
        spacetime: '27 January 2021, online',
        type: 'Winter school poster',
    },
  ];

function fill_template_presentation(data){
    var innerHTML = `
    <div class="title">${data.title}</div>
    <div class="event">${data.event}</div>
    <div class="spacetime">${data.spacetime}</div>
    <div class="type">${data.type}</div>
    `
    return innerHTML
}


document.addEventListener('DOMContentLoaded', function() {
    
    function createListItem(data) {
        var listItem = document.createElement('li');
        listItem.innerHTML = fill_template_presentation(data);
        return listItem;
    }
    
    var listContainer = document.getElementById('presentations');
    
    presentationData.forEach(function (data) {
        console.log(data)
        var listItem = createListItem(data);
        listContainer.appendChild(listItem);
    });

});
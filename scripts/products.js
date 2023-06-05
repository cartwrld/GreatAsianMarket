"use strict"

let catName;
let itemName;
let ptc = $('.product_tree_cat');
let itemCont = $('#items_container');
let filterCollapse = $('#filterCollapse')

let filtersOpen = false;

$(function () {
    // window.onload = function () {
    if ($(window).width() >= 992) {
        console.log($(window).width())
        $('#filterCollapse').collapse('show')
        filtersOpen = true;
    }
    // }
    $(window).on('resize', function () {
        
        switch ($(window).width() < 992) {
            case true: filterCollapse.collapse('hide'); break;
            case false: filterCollapse.collapse('show'); break;
        }
        
    });
    loadAllProducts()
    animateAllProducts()
    
    handleProductTreeIconSwitcher()
    handleProductTreeItemClick();
    buildBreadCrumbTrail()
    estFilterButtonClick()
    // handleAutoCollapseFiltersAtLG()
    
    
});

function handleAutoCollapseFiltersAtLG() {
    

        
        // if ($(window).width() < 992) {
        //
        //     return
        // } else {
        //     $('#filterCollapse').toggle();
        // }
    
}

function estFilterButtonClick() {
    $('#product_filter_btn').on('click', function () {
        if (!filtersOpen) {
            $(this).addClass('rounded-bottom')
            filtersOpen = true;
        } else {
            filtersOpen = false;
        }
    });
}


function handleProductTreeIconSwitcher() {
    $(ptc).on('click', function () {
        let icon = $(this).children();
        let opened = 'bi-caret-down-fill';
        let closed = 'bi-caret-right-fill';
        
        if (catName === $(this).text().trim()) {
            $(icon).removeClass(opened)
            $(icon).addClass(closed)
            return
        }
        
        catName = $(this).text().trim();
        
        $(icon).removeClass(opened)
        $(icon).addClass(closed)
        
        $(ptc).not(this).each(function () {
            let curIcon = $(this).children();
            $($(this).attr('href')).collapse('hide');
            $(curIcon).removeClass(opened)
            $(curIcon).addClass(closed)
        });
        
        $(icon).removeClass(closed)
        $(icon).addClass(opened)
    });
}

function buildBreadCrumbTrail() {
    
    let bc = $('.breadcrumb');
    $(bc).html(`
        <li class="breadcrumb-item p-1"><a href="../home.html">Home</a></li>
        <li class="breadcrumb-item p-1"><a href="../products.html">Products</a></li>
    `);
    if (catName === undefined && itemName === undefined) {
        $(bc).append(`<li class="breadcrumb-item p-1">All Products</li>`)
    } else {
        $(bc).append(`<li class="breadcrumb-item p-1 active" aria-current="page">${catName}</li>`)
        $(bc).append(`<li class="breadcrumb-item p-1 active" aria-current="page">${itemName}</li>`)
    }
    
    
}

function handleProductTreeItemClick() {
    let pti = $('.product_tree_item');
    
    for (let i = 0; i < pti.length; i++) {
        $(pti[i]).click(() => {
            itemName = $(pti[i]).html().trim();
            
            
            console.log(itemName)
            
            
            $('#items_container').html("");
            
            let itemCount = Math.floor(Math.random() * (14 - 7) + 7);
            
            for (let i = 0; i < itemCount; i++) {
                $("#items_container").append(createProductCard())
            }
            
            buildBreadCrumbTrail()
        })
    }
    
}

function loadAllProducts() {
    
    for (let i = 0; i < 36; i++) {
        itemCont.append(createProductCard());
    }
}


function animateAllProducts() {
    
    let items = itemCont.children()
    
    for (let i of items) {
        $(i).css('opacity', '0%');
    }
    
    // for (let i=0; i<items.length; i++) {
        let i = 0;
        
        let itemCycle = setInterval(function() {
            
            $(items[i++]).css({
                opacity : "100%",
                transition : "opacity 0.3s ease"})
        
            if (i === items.length-1) {
                clearInterval(itemCycle);
            }
        },100);
    // }
}

function animateItems() {

}


function createProductCard() {
    return `
        <div class="container shadow bg-success m-4 m-sm-4 m-md-4 m-lg-4 m-xl-4 m-xxl-4
            col-12
            col-sm-5
            col-md-5
            col-lg-5
            col-xl-5
            col-xxl-3
        text-light h-auto
        d-flex flex-column rounded p-3 ">
            <div class="row">
                <img src="../media/image-coming-soon.jpg" alt="Image coming soon" class="col">
            </div>
            <div class="container d-flex flex-column pt-2">
                <div>
                    <strong class="h4">${itemName == null ? "GAM" : itemName} Product</strong>
                </div>
                <div>
                    <em>Product Manufacturer</em>
                </div>
            </div>
            <div class="container d-flex justify-content-end align-items-center pt-2">
                <strong class="h5">$${Math.floor(Math.random() * 15)}.99</strong>
            </div>
        </div>
`
}


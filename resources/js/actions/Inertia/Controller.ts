import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
const Controller535fd093ca1d5254af5dc12ac208e8d5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})

Controller535fd093ca1d5254af5dc12ac208e8d5.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.url = (options?: RouteQueryOptions) => {
    return Controller535fd093ca1d5254af5dc12ac208e8d5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
Controller535fd093ca1d5254af5dc12ac208e8d5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
    const Controller535fd093ca1d5254af5dc12ac208e8d5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/about'
 */
        Controller535fd093ca1d5254af5dc12ac208e8d5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller535fd093ca1d5254af5dc12ac208e8d5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller535fd093ca1d5254af5dc12ac208e8d5.form = Controller535fd093ca1d5254af5dc12ac208e8d5Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
const Controller36402f3b102b68b92616e946647e00cf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
})

Controller36402f3b102b68b92616e946647e00cf.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.url = (options?: RouteQueryOptions) => {
    return Controller36402f3b102b68b92616e946647e00cf.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
Controller36402f3b102b68b92616e946647e00cf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller36402f3b102b68b92616e946647e00cf.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
    const Controller36402f3b102b68b92616e946647e00cfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller36402f3b102b68b92616e946647e00cf.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
        Controller36402f3b102b68b92616e946647e00cfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller36402f3b102b68b92616e946647e00cf.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/contact'
 */
        Controller36402f3b102b68b92616e946647e00cfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller36402f3b102b68b92616e946647e00cf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller36402f3b102b68b92616e946647e00cf.form = Controller36402f3b102b68b92616e946647e00cfForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
const Controller9a71fe670aa6f1830ff0b94dba913ef3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9a71fe670aa6f1830ff0b94dba913ef3.url(options),
    method: 'get',
})

Controller9a71fe670aa6f1830ff0b94dba913ef3.definition = {
    methods: ["get","head"],
    url: '/report-bug',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
Controller9a71fe670aa6f1830ff0b94dba913ef3.url = (options?: RouteQueryOptions) => {
    return Controller9a71fe670aa6f1830ff0b94dba913ef3.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
Controller9a71fe670aa6f1830ff0b94dba913ef3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller9a71fe670aa6f1830ff0b94dba913ef3.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
Controller9a71fe670aa6f1830ff0b94dba913ef3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller9a71fe670aa6f1830ff0b94dba913ef3.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
    const Controller9a71fe670aa6f1830ff0b94dba913ef3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller9a71fe670aa6f1830ff0b94dba913ef3.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
        Controller9a71fe670aa6f1830ff0b94dba913ef3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9a71fe670aa6f1830ff0b94dba913ef3.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/report-bug'
 */
        Controller9a71fe670aa6f1830ff0b94dba913ef3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller9a71fe670aa6f1830ff0b94dba913ef3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller9a71fe670aa6f1830ff0b94dba913ef3.form = Controller9a71fe670aa6f1830ff0b94dba913ef3Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
const Controllera2c058616aeb0c9393ca03a98bc05c02 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})

Controllera2c058616aeb0c9393ca03a98bc05c02.definition = {
    methods: ["get","head"],
    url: '/privacy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.url = (options?: RouteQueryOptions) => {
    return Controllera2c058616aeb0c9393ca03a98bc05c02.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
Controllera2c058616aeb0c9393ca03a98bc05c02.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
    const Controllera2c058616aeb0c9393ca03a98bc05c02Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
        Controllera2c058616aeb0c9393ca03a98bc05c02Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2c058616aeb0c9393ca03a98bc05c02.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/privacy'
 */
        Controllera2c058616aeb0c9393ca03a98bc05c02Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllera2c058616aeb0c9393ca03a98bc05c02.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllera2c058616aeb0c9393ca03a98bc05c02.form = Controllera2c058616aeb0c9393ca03a98bc05c02Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
const Controller619dc3a99425f668ea9cab64e6648cb4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})

Controller619dc3a99425f668ea9cab64e6648cb4.definition = {
    methods: ["get","head"],
    url: '/terms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.url = (options?: RouteQueryOptions) => {
    return Controller619dc3a99425f668ea9cab64e6648cb4.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
Controller619dc3a99425f668ea9cab64e6648cb4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
    const Controller619dc3a99425f668ea9cab64e6648cb4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
        Controller619dc3a99425f668ea9cab64e6648cb4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller619dc3a99425f668ea9cab64e6648cb4.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/terms'
 */
        Controller619dc3a99425f668ea9cab64e6648cb4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller619dc3a99425f668ea9cab64e6648cb4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller619dc3a99425f668ea9cab64e6648cb4.form = Controller619dc3a99425f668ea9cab64e6648cb4Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
const Controller57ee81d6ab9c70de1067d8abbe890fa2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller57ee81d6ab9c70de1067d8abbe890fa2.url(options),
    method: 'get',
})

Controller57ee81d6ab9c70de1067d8abbe890fa2.definition = {
    methods: ["get","head"],
    url: '/recipes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
Controller57ee81d6ab9c70de1067d8abbe890fa2.url = (options?: RouteQueryOptions) => {
    return Controller57ee81d6ab9c70de1067d8abbe890fa2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
Controller57ee81d6ab9c70de1067d8abbe890fa2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller57ee81d6ab9c70de1067d8abbe890fa2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
Controller57ee81d6ab9c70de1067d8abbe890fa2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller57ee81d6ab9c70de1067d8abbe890fa2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
    const Controller57ee81d6ab9c70de1067d8abbe890fa2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller57ee81d6ab9c70de1067d8abbe890fa2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
        Controller57ee81d6ab9c70de1067d8abbe890fa2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller57ee81d6ab9c70de1067d8abbe890fa2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/recipes'
 */
        Controller57ee81d6ab9c70de1067d8abbe890fa2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller57ee81d6ab9c70de1067d8abbe890fa2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller57ee81d6ab9c70de1067d8abbe890fa2.form = Controller57ee81d6ab9c70de1067d8abbe890fa2Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
const Controllerd4dc3640b6678924f3941c08a22cff06 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd4dc3640b6678924f3941c08a22cff06.url(options),
    method: 'get',
})

Controllerd4dc3640b6678924f3941c08a22cff06.definition = {
    methods: ["get","head"],
    url: '/articles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
Controllerd4dc3640b6678924f3941c08a22cff06.url = (options?: RouteQueryOptions) => {
    return Controllerd4dc3640b6678924f3941c08a22cff06.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
Controllerd4dc3640b6678924f3941c08a22cff06.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd4dc3640b6678924f3941c08a22cff06.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
Controllerd4dc3640b6678924f3941c08a22cff06.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd4dc3640b6678924f3941c08a22cff06.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
    const Controllerd4dc3640b6678924f3941c08a22cff06Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllerd4dc3640b6678924f3941c08a22cff06.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
        Controllerd4dc3640b6678924f3941c08a22cff06Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd4dc3640b6678924f3941c08a22cff06.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/articles'
 */
        Controllerd4dc3640b6678924f3941c08a22cff06Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllerd4dc3640b6678924f3941c08a22cff06.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllerd4dc3640b6678924f3941c08a22cff06.form = Controllerd4dc3640b6678924f3941c08a22cff06Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
const Controller42a740574ecbfbac32f8cc353fc32db9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})

Controller42a740574ecbfbac32f8cc353fc32db9.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.url = (options?: RouteQueryOptions) => {
    return Controller42a740574ecbfbac32f8cc353fc32db9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
Controller42a740574ecbfbac32f8cc353fc32db9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
    const Controller42a740574ecbfbac32f8cc353fc32db9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        Controller42a740574ecbfbac32f8cc353fc32db9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller42a740574ecbfbac32f8cc353fc32db9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller42a740574ecbfbac32f8cc353fc32db9.form = Controller42a740574ecbfbac32f8cc353fc32db9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/about': Controller535fd093ca1d5254af5dc12ac208e8d5,
    '/contact': Controller36402f3b102b68b92616e946647e00cf,
    '/report-bug': Controller9a71fe670aa6f1830ff0b94dba913ef3,
    '/privacy': Controllera2c058616aeb0c9393ca03a98bc05c02,
    '/terms': Controller619dc3a99425f668ea9cab64e6648cb4,
    '/recipes': Controller57ee81d6ab9c70de1067d8abbe890fa2,
    '/articles': Controllerd4dc3640b6678924f3941c08a22cff06,
    '/dashboard': Controller42a740574ecbfbac32f8cc353fc32db9,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller
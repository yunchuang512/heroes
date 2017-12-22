"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(crisisService, router, route, dialogService) {
        this.crisisService = crisisService;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.crisisService.getCrisisById(+queryParams.id).then(function (crisis) {
                _this.crisis = crisis;
            });
        });
    };
    CrisisDetailComponent.prototype.goBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.crisis.describe = this.editDescribe;
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-crisis-detail',
            templateUrl: 'crisis-detail.component.html'
        })
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;

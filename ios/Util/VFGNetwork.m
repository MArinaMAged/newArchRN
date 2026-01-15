//
//  VFGNetwork.m
//  AwesomeProjec
//
//  Created by Marina Aziz, Vodafone on 15/01/2026.
//

#import "VFGNetwork.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTTurboModule.h>

@interface RCT_EXTERN_MODULE(VFGNetwork, NSObject)
RCT_EXTERN_METHOD(hello:(NSString *)method
				  resolve:(RCTPromiseResolveBlock)resolve
				  reject:(RCTPromiseRejectBlock)reject)
@end


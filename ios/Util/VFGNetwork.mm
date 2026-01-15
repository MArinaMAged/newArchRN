#import "VFGNetwork.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <VFGNetwork/VFGNetwork.h>
#endif

@implementation VFGNetwork

RCT_EXPORT_MODULE()

- (void)hello:(NSString *)method
      resolve:(RCTPromiseResolveBlock)resolve
       reject:(RCTPromiseRejectBlock)reject {
    NSString *message = [NSString stringWithFormat:@"Hello from native: %@", method];
    NSLog(@"%@", message);
    resolve(message);
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeVFGNetworkSpecJSI>(params);
}
#endif

@end

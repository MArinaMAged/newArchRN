#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <VFGNetwork/VFGNetwork.h>
#endif

NS_ASSUME_NONNULL_BEGIN

#ifdef RCT_NEW_ARCH_ENABLED
@interface VFGNetwork : NSObject <NativeVFGNetworkSpec>
#else
@interface VFGNetwork : NSObject <RCTBridgeModule>
#endif

@end

NS_ASSUME_NONNULL_END

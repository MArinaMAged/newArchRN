//
//  File.swift
//  AwesomeProjec
//
//  Created by Marina Aziz, Vodafone on 14/01/2026.
//

import Foundation
import React

@objc(VFGNetwork)
class VFGNetwork: NSObject, RCTTurboModule {
  static func moduleName() -> String! {
    return "VFGNetwork"
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc public func hello(_ method: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    let message = "Hello from native: \(method)"
    print(message)
    resolve(message)
  }
  
    @objc public func getTurboModule(jsInvoker: RCTTurboModuleJSInvoker) -> RCTTurboModule {
      return self
    }
}

import { getBusinessDomainById, updateBusinessDomain } from "@/lib/database";
import { formateError, formatSuccess } from "@/lib/request";
import { NextRequest, NextResponse } from "next/server";

// 获取详情
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const businessDomain = await getBusinessDomainById(params.id);

    console.log(params.id, "businessDomain", businessDomain);
    return NextResponse.json(
      formatSuccess({
        data: businessDomain,
      })
    );
  } catch (error: any) {
    return NextResponse.json(
      formateError({
        message: error.message || "Failed to fetch business domain",
      })
    );
  }
}

// 更新
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const { name, description, active, sso } = data;

    // 添加基本验证
    const errors: Record<string, string[]> = {};
    if (name !== undefined && !name?.trim()) {
      errors.name = ["Name is required"];
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        formateError({
          message: "Validation failed",
        })
      );
    }

    const updatedBusinessDomain = await updateBusinessDomain(params.id, {
      name,
      description,
      active,
      sso,
    });

    return NextResponse.json(
      formatSuccess({
        data: updatedBusinessDomain,
      })
    );
  } catch (error: any) {
    return NextResponse.json(
      formateError({
        message: error.message || "Failed to update business domain",
      })
    );
  }
}
